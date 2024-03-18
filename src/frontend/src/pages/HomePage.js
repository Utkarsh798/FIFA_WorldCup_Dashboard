import React, {useEffect, useState} from 'react';

import './HomePage.css';
import {LatestWorldCupTile} from "../component/LatestWorldCupTile";
import {DropDownYearSelection} from "../component/DropDownYearSelection";
import {WorldCupTable} from "../component/WorldCupTable";

export const HomePage = () => {

    const [worldcup, setWorldcups] = useState();
    const [statistics, setStatistics] = useState();
    const [selectedYearId, setSelectedYearId] = useState(3);

    useEffect(
        () => {
            const fetchAllWorldCup = async () => {
                const response = await fetch(`http://localhost:8080/worldcup`);
                const data = await response.json();
                setWorldcups(data);

                const response_statistics = await fetch(`http://localhost:8080/worldcup/statistics`);
                const statistics_data = await response_statistics.json();
                setStatistics(statistics_data);
            };
            fetchAllWorldCup();
        }, []
    );

    const handleYearSelect = (id) => {
        setSelectedYearId(id);
    };


    return (
        <div className="HomePage">

            <div className="app-name">
                <h1> FIFA World Cup Dashboard</h1>
                <p>
                    This dashboard provides comprehensive information on FIFA World Cup tournaments over the years, including details on winners, host nations, match data, and additional insights. You can also explore team statistics and which team played in specific tournament on Details Tab .
                </p>
            </div>

            <div className="app-logo">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C72B/production/_123978905_drawgraphic.jpg" alt="World-cup-logo"/>
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

            <div className="statistics-table-section">
                <p> Statistics </p>
                <WorldCupTable data={statistics} />
            </div>
        </div>
    );
}
