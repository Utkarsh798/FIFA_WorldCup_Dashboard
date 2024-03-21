package io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Games {
    @Id
    private Long id;
    private String StageName;
    private String home_team;
    private String away_team;
    private int home_score;
    private int away_score;
    private String winning_team;
    private String losing_team;
    private Integer home_penalty;
    private Integer away_penalty;
    private String country;
    private String city;
}
