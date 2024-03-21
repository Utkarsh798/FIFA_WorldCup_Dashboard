import React,{useState} from "react";

import './LatestWorldCupTile.css'
import {logoArray} from "../MappingArrays/LogoArray";
import {Link} from "react-router-dom";

export const LatestWorldCupTile = ({worldcup}) => {

    const [isVisible, setIsVisible] = useState(false);
    const WinnerTeamLogo = logoArray.find(year => year.name === worldcup.winner)?.logoImg;
    const RunnerUpTeamLogo = logoArray.find(year => year.name === worldcup.second)?.logoImg;
    const ThirdPlaceTeamLogo = logoArray.find(year => year.name === worldcup.third)?.logoImg;
    const FourthPlaceTeamLogo = logoArray.find(year => year.name === worldcup.fourth)?.logoImg;


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
                        <div className="text">
                            Total Teams Participated: {worldcup.total_teams}
                            <img className="ic_stadium-logo"
                                 src="https://ivan96.pythonanywhere.com/assets/images/ic_stadium.png" alt="ic_stadium"/>
                        </div>
                        <div className="text">
                            Total games Played: {worldcup.total_games}
                            <img className="ic_soccer_ball-logo"
                                 src="https://ivan96.pythonanywhere.com/assets/images/ic_soccer_ball.png" alt="ic_soccer_ball"/>
                        </div>
                    </div>


                    <div className="second-content">
                        <div className="text">
                            Total Goal Scored: {worldcup.goal_scored}
                            <img className="goal-score-logo"
                                 src="data:image/jpeg;base64,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" alt="goal-score"/>
                        </div>
                        <div className="text">
                            Attended by {worldcup.attendance} people.
                            <img className="attendance-logo"
                                 src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnw-5Eh4Jl0kcOsIGqWPIQhZg41ZUZ7CP-WJhlqfjYF41hhqGUNj2sce3ZoNdD88EcaDU&usqp=CAU" alt="attendance"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="detail-link-container">
                <Link to={`worldcup/allMatches/${worldcup.year}`} className="detail-link">More Detail</Link>
            </div>
        </div>
    );
}