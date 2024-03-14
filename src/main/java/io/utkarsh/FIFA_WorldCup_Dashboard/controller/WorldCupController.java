package io.utkarsh.FIFA_WorldCup_Dashboard.controller;

import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.MatchFormation;
import io.utkarsh.FIFA_WorldCup_Dashboard.Service.ModelService;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.Statistics;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class WorldCupController {

    private final ModelService modelService;


    public WorldCupController(ModelService modelService) {
        this.modelService = modelService;
    }

    @GetMapping("/worldcup")
    public List<WorldCup> getAllWorldcupInfo(){
        return this.modelService.getAllWorldCups();
    }

    @GetMapping("/worldcup/statistics")
    public List<Statistics> getALLStatistics(){
        return this.modelService.getStatistics();
    }

    @GetMapping("/worldcup/allMatches/{year}")
    public MatchFormation getALLMatches(@PathVariable String year){
        return modelService.getAllMatches(year);
    }

}
