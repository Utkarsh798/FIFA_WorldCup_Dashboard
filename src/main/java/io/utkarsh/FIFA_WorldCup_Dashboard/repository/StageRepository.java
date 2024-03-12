package io.utkarsh.FIFA_WorldCup_Dashboard.repository;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage,Long> {

    List<Stage> getStageByYear(String year);
}
