
import React from 'react';
import './WorldCupTable.css'; // Import your CSS file

export const WorldCupTable = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <div className="table-container">
            <table className="world-cup-table">
                <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Times Winner</th>
                    <th>Times Second</th>
                    <th>Times Third</th>
                    <th>Times Fourth</th>
                </tr>
                </thead>
                <tbody>
                {data.map((team, index) => (
                    <tr key={index}>
                        <td>{team.team_name}</td>
                        <td className="numbers">{team.winner}</td>
                        <td className="numbers">{team.second}</td>
                        <td className="numbers">{team.third}</td>
                        <td className="numbers">{team.fourth}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

