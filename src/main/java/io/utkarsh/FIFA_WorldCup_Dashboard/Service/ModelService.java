package io.utkarsh.FIFA_WorldCup_Dashboard.Service;

import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.Games;
import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.MatchFormation;
import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.StageMatch;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.Statistics;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.MatchRepository;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.StatisticsRepository;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.WorldCupRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class ModelService {

    private final WorldCupRepository worldCupRepository;
    private final StatisticsRepository statisticsRepository;
    private final MatchRepository matchRepository;

    public ModelService(WorldCupRepository worldCupRepository, StatisticsRepository statisticsRepository, MatchRepository matchRepository) {
        this.worldCupRepository = worldCupRepository;
        this.statisticsRepository = statisticsRepository;
        this.matchRepository = matchRepository;
    }


    public MatchFormation getAllMatches(String year) {
        MatchFormation matchFormation = new MatchFormation();
        matchFormation.setYear(year);

        Map<String, List<Games>> list_games = new LinkedHashMap<>();
        Object[] getAllStageName = this.matchRepository.getAllDistinctStageName(year);

        for (Object row : getAllStageName) {
            Object[] rowValues = (Object[]) row;
            String stageName = (String) rowValues[0];
            list_games.put(stageName, new ArrayList<>());
        }

        List<StageMatch> stageMatchList = this.matchRepository.getAllMatchList(year);

        for(StageMatch stageMatch:stageMatchList){
            String stageName = stageMatch.getStageName();
            Games games = setgames(stageMatch);
            list_games.get(stageName).add(games);
        }

        matchFormation.setStageMatchList(list_games);

        return matchFormation;
    }

    private static Games setgames(StageMatch stageMatch) {
        Games games= new Games();
        games.setId(stageMatch.getId());
        games.setHome_team(stageMatch.getHome_team());
        games.setAway_team(stageMatch.getAway_team());
        games.setHome_score(stageMatch.getHome_score());
        games.setAway_score(stageMatch.getAway_score());
        games.setWinning_team(stageMatch.getWinning_team());
        games.setLosing_team(stageMatch.getLosing_team());
        games.setDate(stageMatch.getDate());
        games.setHome_penalty(stageMatch.getHome_penalty());
        games.setAway_penalty(stageMatch.getAway_penalty());
        return games;
    }

    public List<Statistics> getStatistics() {
        return this.statisticsRepository.findAll();
    }


    public List<WorldCup> getAllWorldCups() {
        Sort sort = Sort.by(Sort.Direction.DESC, "year"); // to sort by year from 2022 to 1930
        return this.worldCupRepository.findAll(sort);
    }
}
