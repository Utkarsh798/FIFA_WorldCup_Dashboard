package io.utkarsh.FIFA_WorldCup_Dashboard.repository;

import io.utkarsh.FIFA_WorldCup_Dashboard.model.Matches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatchRepository extends JpaRepository<Matches,Long> {

    @Query("select m from Matches m where m.year = :year order by m.date")
    List<Matches> getAllMatchByDate(@Param("year") String year);


}
