import React from "react";
import './Match.css'


export const Match = ({match}) => {

    return (
        <div className="Match">

            <h3 className="stage-name-section">{match.stageName}</h3>
            <p className="home-text-section"> Home Team </p>
            <p className="away-text-section"> Away Team </p>


            <p className="home-teamName-section">{match.home_team}</p>
            <p className="away-teamName-section">{match.away_team}</p>
            <p className="home-score-section">{match.home_score}</p>
            <p className="away-score-section">{match.away_score}</p>
            {match && match.home_penalty !== null && match.away_penalty !== null && (
                <div className="penalty-section">
                    <p className="home-penalty-section">({match.home_penalty})</p>
                    <p className="away-penalty-section">({match.away_penalty})</p>
                </div>
            )}
        </div>
    );
}
