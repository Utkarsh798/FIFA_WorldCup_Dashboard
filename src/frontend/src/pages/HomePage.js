import React, {useEffect, useState} from 'react';

import './HomePage.css';
import {LatestWorldCupTile} from "../component/LatestWorldCupTile";
import {DropDownYearSelection} from "../component/DropDownYearSelection";

export const HomePage = () => {

    const [worldcup, setWorldcups] = useState();
    const [selectedYearId, setSelectedYearId] = useState(3);

    useEffect(
        () => {
            const fetchAllWorldCup = async () => {
                const response = await fetch(`http://localhost:8080/worldcup`);
                const data = await response.json();
                setWorldcups(data);

            };
            fetchAllWorldCup();
        }, []
    );

    const handleYearSelect = (id) => {
        setSelectedYearId(id);
        console.log("Selected year :", id);
        // Do whatever you need to do with the selected year ID in the parent component
    };

    return (
        <div className="HomePage">
            <div className="app-name">
                <h1> FIFA World Cup Dashboard</h1>
            </div>
            <div className="app-logo">
                <img src="" alt="World-cup-logo"/>
            </div>
            <div className="latest-worldcup-section">
                {worldcup && worldcup.length > 0 && (
                    <>
                        <LatestWorldCupTile worldcup={worldcup[0]}/>
                        <LatestWorldCupTile worldcup={worldcup[1]}/>
                        <LatestWorldCupTile worldcup={worldcup[2]}/>
                    </>
                )}
            </div>

            <div className="drop-down-year-selection">
                <DropDownYearSelection onSelect={handleYearSelect} />
            </div>

            <div className="latest-worldcup-section">
                {worldcup && worldcup.length > 0 && (
                    <>
                        <LatestWorldCupTile worldcup={worldcup[selectedYearId]}/>
                    </>
                )}
            </div>

        </div>
    );
}
