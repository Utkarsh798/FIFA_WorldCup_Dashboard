package io.utkarsh.FIFA_WorldCup_Dashboard.repository;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.Matches;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchRepository extends JpaRepository<Matches,Long> {

    List<Matches> getStageByYear(String year);
}
