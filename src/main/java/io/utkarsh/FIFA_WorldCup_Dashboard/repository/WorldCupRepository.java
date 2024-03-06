package io.utkarsh.FIFA_WorldCup_Dashboard.repository;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.WorldCup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorldCupRepository extends JpaRepository<WorldCup, String> {

}
