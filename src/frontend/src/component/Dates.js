import React from "react";
import {Match} from "./Match";
import './Dates.css';

export const Dates = ({stage, matches}) => {


    return (
        <div className="Dates">
            <div className="year-text-section">
                <h2>{stage}</h2>
            </div>
            <div className="each-match-section">
                {matches.map(match => (
                    <Match key={match.id} match={match} />
                ))}
            </div>
        </div>
    );

}
