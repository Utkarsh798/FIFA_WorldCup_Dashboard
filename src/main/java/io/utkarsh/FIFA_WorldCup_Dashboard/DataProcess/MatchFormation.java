package io.utkarsh.FIFA_WorldCup_Dashboard.DataProcess;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor@NoArgsConstructor
@Entity
public class MatchFormation {
    @Id
    private String year;

    @Transient
    private Map<String, List<Games>> MatchListByDates;

}
