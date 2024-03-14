package io.utkarsh.FIFA_WorldCup_Dashboard.repository;

import io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.StageMatch;
import io.utkarsh.FIFA_WorldCup_Dashboard.model.Matches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatchRepository extends JpaRepository<Matches,Long> {


    @Query("select distinct m.stageName, m.date from Matches m where m.year = :year order by m.date")
    Object[] getAllDistinctStageName(@Param("year") String year);

    @Query("SELECT new io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess.StageMatch(m.id,m.stageName, m.home_team, m.away_team, m.home_score, m.away_score, m.winning_team, m.losing_team, m.date, m.home_penalty, m.away_penalty) " +
            "FROM Matches m WHERE m.year = :year ORDER BY m.date ASC ")
    List<StageMatch> getAllMatchList(@Param("year") String year);


}
