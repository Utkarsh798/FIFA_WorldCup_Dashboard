package io.utkarsh.FIFA_WorldCup_Dashboard.model;

import jakarta.persistence.*;
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
@Table(name = "matches")
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "year")
    private String year;

    @Column(name = "stage")
    private String stage_name;

    @Column(name = "home_team")
    private String home_team;

    @Column(name = "away_team")
    private String away_team;

    @Column(name ="home_score")
    private int home_score;

    @Column(name ="away_score")
    private int away_score;

    @Column(name ="winning_team")
    private String winning_team;

    @Column(name ="losing_team")
    private String losing_team;

    @Column(name ="date")
    private LocalDate date;

    @Column(name ="home_penalty")
    private Integer home_penalty;

    @Column(name ="away_penalty")
    private Integer away_penalty;


}
