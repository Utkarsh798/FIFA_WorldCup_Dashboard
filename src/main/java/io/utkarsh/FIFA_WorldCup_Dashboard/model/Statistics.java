package io.utkarsh.FIFA_WorldCup_Dashboard.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "statistics")
public class Statistics {

    @Id
    @Column(name = "team_name")
    private String team_name;
    @Column(name = "winners")
    private String winner;
    @Column(name = "second_place")
    private String second;
    @Column(name = "third_place")
    private String third;
    @Column(name = "fourth_place")
    private String fourth;

}
