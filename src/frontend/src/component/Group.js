import React from "react";
import {Match} from "./Match";
import './Group.css';

export const Group = ({stage, matches}) => {


    return (
        <div className="Group">
            <div className="stage-name-section">
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
