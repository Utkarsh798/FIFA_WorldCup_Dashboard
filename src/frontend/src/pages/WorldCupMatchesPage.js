import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Dates} from "../component/Dates";
import {motion} from "framer-motion";
import './WorldCupMatchesPage.css';
import {worldcupImg} from "../MappingArrays/WorldCupImageArray";

export const WorldCupMatchesPage = () => {

    const [worldcupInfo, setWorldcupInfo] = useState(null);
    const {year} = useParams();

    const worldCupLogo = worldcupInfo && worldcupInfo.year ?
                                    worldcupImg.find(year_selected => year_selected.yearID === worldcupInfo.year)?.imgUrl : null;


    useEffect(
        () => {

            const fetchAllWorldCupMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/worldcup/${year}`);
                const data = await response.json();
                setWorldcupInfo(data);
                console.log(data);

            };
            fetchAllWorldCupMatches();
        }, [year]
    );

    return (
        <div className="WorldCupPage">
            <motion.div className="year-name-section"
                        initial={{y:"10px", opacity:0}}
                        animate={{y:0, opacity:1}}
                        exit={{y:"50%", opacity:0}}
                        transition={{duration: 0.7, delay: 0.2}}>
                <h1>FIFA WorldCup <br/>{worldcupInfo && worldcupInfo.year ? `${worldcupInfo.year}` : 'Loading...'}</h1>
            </motion.div>
            <motion.div className="logo-section"
                        initial={{y:"10px", opacity:0}}
                        animate={{y:0, opacity:1}}
                        exit={{y:"50%", opacity:0}}
                        transition={{duration: 0.7, delay: 0.3}}>
                {worldCupLogo &&
                    <img className="winner-logo" src={worldCupLogo} alt={worldcupInfo.year}/>}
            </motion.div>

            {worldcupInfo && (
                <motion.div className="date-section"
                            initial={{y:"10px", opacity:0}}
                            animate={{y:0, opacity:1}}
                            exit={{y:"50%", opacity:0}}
                            transition={{duration: 0.7, delay: 0.4}}>
                    {Object.entries(worldcupInfo.matchListByDates).map(([stage, matches]) => (
                        <Dates key={stage} stage={stage} matches={matches} />
                    ))}
                </motion.div>
            )}
        </div>
    );
}
