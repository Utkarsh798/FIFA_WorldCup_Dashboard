package io.utkarsh.FIFA_WorldCup_Dashboard.Service;

import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.Games;
import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.MatchFormation;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.Matches;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.Statistics;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.MatchRepository;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.StatisticsRepository;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.WorldCupRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

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


    public List<Statistics> getStatistics() {
        return this.statisticsRepository.findAll();
    }


    public List<WorldCup> getAllWorldCups() {
        Sort sort = Sort.by(Sort.Direction.DESC, "year"); // to sort by year from 2022 to 1930
        return this.worldCupRepository.findAll(sort);
    }

    public MatchFormation getMatchesByYear(String year) {
        MatchFormation matchFormation = new MatchFormation();
        matchFormation.setYear(year);

        Map<String, List<Games>> list_games = new LinkedHashMap<>();

        List<Matches> list_match = this.matchRepository.getAllMatchByDate(year);

        for(Matches matches:list_match){
            LocalDate currentDate = matches.getDate();

            // Format pattern for the desired output format
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE dd MMMM yyyy", Locale.ENGLISH);

            String formatted_date = currentDate.format(formatter);

            // set the output games
            Games games = setgames(matches);

            if(list_games.containsKey(formatted_date)){
                list_games.get(formatted_date).add(games);
            }else{
                List<Games> gamesList = new ArrayList<>();
                gamesList.add(games);
                list_games.put(formatted_date,gamesList);
            }
        }
        matchFormation.setStageMatchList(list_games);
        return matchFormation;
    }


    private static Games setgames(Matches matches) {
        Games games= new Games();
        games.setId(matches.getId());
        games.setStageName(matches.getStageName());
        games.setHome_team(matches.getHome_team());
        games.setAway_team(matches.getAway_team());
        games.setHome_score(matches.getHome_score());
        games.setAway_score(matches.getAway_score());
        games.setWinning_team(matches.getWinning_team());
        games.setLosing_team(matches.getLosing_team());
        games.setHome_penalty(matches.getHome_penalty());
        games.setAway_penalty(matches.getAway_penalty());
        games.setCountry(matches.getCountry());
        games.setCity(matches.getCity());
        return games;
    }

}
