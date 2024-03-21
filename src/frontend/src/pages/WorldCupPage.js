import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Group} from "../component/Group";
import './WorldCupPage.css';
import {worldcupImg} from "../MappingArrays/WorldCupImageArray";

export const WorldCupPage = () => {

    const [worldcupInfo, setWorldcupInfo] = useState(null);
    const {year} = useParams();

    const worldCupLogo = worldcupInfo && worldcupInfo.year ?
                                    worldcupImg.find(year_selected => year_selected.yearID === worldcupInfo.year)?.imgUrl : null;


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
                <h1>FIFA WorldCup <br/>{worldcupInfo && worldcupInfo.year ? `${worldcupInfo.year}` : 'Loading...'}</h1>
            </div>
            <div className="logo-section">
                {worldCupLogo &&
                    <img className="winner-logo" src={worldCupLogo} alt={worldcupInfo.year}/>}
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
