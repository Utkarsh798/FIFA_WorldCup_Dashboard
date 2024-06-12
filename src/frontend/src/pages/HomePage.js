import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
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
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/worldcup`);
                const data = await response.json();
                setWorldcups(data);

                const response_statistics = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/worldcup/statistics`);
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
        <motion.div className="HomePage">

            <motion.div className="app-name"
                        initial={{y:"10px", opacity:0}}
                        animate={{y:0, opacity:1}}
                        exit={{y:"50%", opacity:0}}
                        transition={{duration: 0.7, delay: 0.2}}>
                <h1> FIFA World Cup Dashboard</h1>
                <p>
                    This dashboard provides comprehensive information on FIFA World Cup tournaments over the years, including details on winners, host nations, match data, and additional insights. You can also explore team statistics and which team played in specific tournament on More Details Tab .
                </p>
            </motion.div>

            <motion.div className="app-logo"
                        initial={{y:"10px", opacity:0}}
                        animate={{y:0, opacity:1}}
                        exit={{y:"50%", opacity:0}}
                        transition={{duration: 0.7, delay: 0.3}}>
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C72B/production/_123978905_drawgraphic.jpg" alt="World-cup-logo"/>
            </motion.div>
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
        </motion.div>
    );
}
