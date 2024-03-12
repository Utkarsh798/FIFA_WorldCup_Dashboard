package io.utkarsh.FIFA_WorldCup_Dashboard.controller;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.Statistics;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.StatisticsRepository;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.WorldCupRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class WorldCupController {

    private final WorldCupRepository worldCupRepository;
    private final StatisticsRepository statisticsRepository;


    public WorldCupController(WorldCupRepository worldCupRepository,StatisticsRepository statisticsRepository) {
        this.worldCupRepository = worldCupRepository;
        this.statisticsRepository = statisticsRepository;
    }

    @GetMapping("/worldcup")
    public List<WorldCup> getAllWorldcupInfo(){
        Sort sort = Sort.by(Sort.Direction.DESC, "year"); // to sort by year from 2022 to 1930
        return this.worldCupRepository.findAll(sort);
    }

    @GetMapping("/worldcup/statistics")
    public List<Statistics> getALLStatistics(){
        return this.statisticsRepository.findAll();
    }
}
