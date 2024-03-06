package io.utkarsh.FIFA_WorldCup_Dashboard.controller;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import io.utkarsh.FIFA_WorldCup_Dashboard.repository.WorldCupRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorldCupController {

    public WorldCupRepository worldCupRepository;

    public WorldCupController(WorldCupRepository worldCupRepository) {
        this.worldCupRepository = worldCupRepository;
    }

    @GetMapping("/worldcup")
    public List<WorldCup> getAllWorldcupInfo(){
        Sort sort = Sort.by(Sort.Direction.DESC, "year"); // to sort by year from 2022 to 1930
        return worldCupRepository.findAll(sort);
    }
}
