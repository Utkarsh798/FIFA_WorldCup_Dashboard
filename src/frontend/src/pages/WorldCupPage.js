import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Group} from "../component/Group";
import './WorldCupPage.css';

export const WorldCupPage = () => {

    const [worldcupInfo, setWorldcupInfo] = useState(null);
    const {year} = useParams();

    useEffect(
        () => {

            const fetchAllWorldCupMatches = async () => {
                const response = await fetch(`http://localhost:8080/worldcup/allMatches/${year}`);
                const data = await response.json();
                setWorldcupInfo(data);
                console.log(data);

            };
            fetchAllWorldCupMatches();
        }, [year]
    );

    return (
        <div className="WorldCupPage">
            <div className="year-name-section">
                <h1>{worldcupInfo && worldcupInfo.year}'s WorldCup</h1>
            </div>
            <div className="logo-section">
                logo
            </div>

            {worldcupInfo && (
                <div className="stage-section">
                    {Object.entries(worldcupInfo.stageMatchList).map(([stage, matches]) => (
                        <Group key={stage} stage={stage} matches={matches} />
                    ))}
                </div>
            )}
        </div>
    );
}
