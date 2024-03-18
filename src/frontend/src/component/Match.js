import React from "react";


export const Match = ({match}) => {

    return (
        <div>
            <p>Home Team: {match.home_team}</p>
            <p>Away Team: {match.away_team}</p>
            <p>Date: {match.date}</p>
        </div>
    );
}
