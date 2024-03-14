package io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class StageMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String stageName;
    private String home_team;
    private String away_team;
    private int home_score;
    private int away_score;
    private String winning_team;
    private String losing_team;
    private LocalDate date;
    private Integer home_penalty;
    private Integer away_penalty;

}
