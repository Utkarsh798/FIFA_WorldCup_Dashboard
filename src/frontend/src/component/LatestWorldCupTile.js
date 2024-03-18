import React,{useState} from "react";

import './LatestWorldCupTile.css'
import {logoArray} from "../MappingArrays/LogoArray";
import {Link} from "react-router-dom";

export const LatestWorldCupTile = ({worldcup}) => {

    const [isVisible, setIsVisible] = useState(false);
    const WinnerTeamLogo = logoArray.find(team => team.name === worldcup.winner)?.logoImg;
    const RunnerUpTeamLogo = logoArray.find(team => team.name === worldcup.second)?.logoImg;
    const ThirdPlaceTeamLogo = logoArray.find(team => team.name === worldcup.third)?.logoImg;
    const FourthPlaceTeamLogo = logoArray.find(team => team.name === worldcup.fourth)?.logoImg;


    const toggleAction = () =>{
        setIsVisible(!isVisible);
    };


    return (
        <div className="LatestWorldCupTile">
            <div className="LatestWorldCupTile-card-tile">

                <div className="year-section">
                    <h2>
                        {worldcup.year}
                    </h2>

                </div>
                <div className="team-logo-section">
                    {WinnerTeamLogo &&
                        <img className="winner-logo" src={WinnerTeamLogo} alt={worldcup.winner}/>}
                </div>


                <div className="winner-section">
                    <h3>Winner</h3>
                    <h1 className="winner-team-name"> {worldcup.winner}</h1>
                </div>


                <div className="runner-up-section">
                    <h4>Runner-up</h4>
                    <h3 className="runner-up-team-name"> {worldcup.second}</h3>
                    {RunnerUpTeamLogo &&
                        <img className="winner-logo" src={RunnerUpTeamLogo} alt={worldcup.second}/>}
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


                <div className={!isVisible ? 'hidden-content' : 'reveal-content'}>

                    <div className="third-place-section">
                        <div className="section-text">
                            Third Place :-
                        </div>
                        <div className="section-text-teamName">
                            {worldcup.third}
                        </div>
                        {ThirdPlaceTeamLogo &&
                            <img className="winner-logo" src={ThirdPlaceTeamLogo} alt={worldcup.third}/>}
                    </div>


                    <div className="fourth-place-section">
                        <div className="section-text">
                            Fourth Place :-
                        </div>
                        <div className="section-text-teamName">
                            {worldcup.fourth}
                        </div>
                        {FourthPlaceTeamLogo &&
                            <img className="winner-logo" src={FourthPlaceTeamLogo} alt={worldcup.fourth}/>}
                    </div>


                    <div className="host-section">
                        <p className="host-text">Host By : {worldcup.host}</p>
                    </div>


                    <div className="first-content">
                        <div className="text">Total Teams Participated: {worldcup.total_teams}</div>
                        <div className="text">Total games Played: {worldcup.total_games}</div>
                    </div>


                    <div className="second-content">
                        <div className="text">Total Goal Scored: {worldcup.goal_scored}</div>
                        <div className="text">Attended by {worldcup.attendance} people.</div>
                    </div>

                </div>
            </div>

            <div className="detail-link-container">
                <Link to={`worldcup/allMatches/${worldcup.year}`} className="detail-link">More Detail</Link>
            </div>
        </div>
    );
}