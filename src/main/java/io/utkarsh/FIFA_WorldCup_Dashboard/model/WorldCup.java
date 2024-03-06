package io.utkarsh.FIFA_WorldCup_Dashboard.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "worldcup")
public class WorldCup {

    @Id
    @Column(name = "year")
    private String year;

    @Column(name = "host")
    private String host;
    @Column(name = "winner")
    private String winner;
    @Column(name = "second")
    private String second;
    @Column(name = "third")
    private String third;
    @Column(name = "fourth")
    private String fourth;

    @Column(name = "goal_scored")
    private Integer goal_scored;

    @Column(name = "total_teams")
    private Integer total_teams;
    @Column(name = "total_games")
    private Integer total_games;
    @Column(name = "attendance")
    private Integer attendance;

}
