import {React, useState} from "react";

import './LatestWorldCupTile.css'
import {Link} from "react-router-dom";

export const LatestWorldCupTile = ({worldcup}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleAction = () =>{
        setIsVisible(!isVisible);
    };


    return (
        <div className="LatestWorldCupTile">

            <div className="year-section">
                <h2>
                    {worldcup.year}
                </h2>

            </div>


            <div className="winner-section">
                <h3>Winner</h3>
                <h1 className="winner-team-name"> {worldcup.winner}</h1>
            </div>


            <div className="runner-up-section">
                <h4>Runner-up</h4>
                <h3 className="runner-up-team-name"> {worldcup.second}</h3>
            </div>


            <div className="icon-section" onClick={toggleAction}>

                {!isVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                )}
            </div>

            <div className="Detail-section">
                <Link to={"https://www.google.com/"} className="Link-to-next-section"> Details >> </Link>
            </div>


            <div className={!isVisible ? 'hidden-content' : 'reveal-content'}>
                <div className="first-content">
                    <p className="content">Third Place <strong className="name">{worldcup.third}</strong></p>
                    <p className="content">Fourth Place <strong className="name">{worldcup.fourth}</strong></p>
                </div>
                <div className="second-content">
                    <p className="content">Host: {worldcup.host}</p>
                    <p className="content">Total Goal Scored: {worldcup.goal_scored}</p>
                    <p className="content">Total Teams Participated: {worldcup.total_teams}</p>
                    <p className="content">Total games Played: {worldcup.total_games}</p>
                    <p className="content">Attended by {worldcup.attendance} people.</p>
                </div>
            </div>


        </div>
    );
}