import React, { useEffect, useState } from "react";
import axios from "axios";
import { teams } from "../constants";
import TeamRow from "../components/TeamRow";
import { Link } from "react-router-dom";
import GameRow from "../components/GameRow";

const Schedule = () => {
    const [data, setData] = useState([{}]);
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLGamesForWeek',
        params: {
            week: '1',
            seasonType: 'reg',
            season: '2023',
        },
        headers: {
            'X-RapidAPI-Key': '77d2c4cb62mshd3d2499d617fd2bp16983fjsn3b406a2f1f93',
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
        },
    };

    useEffect(() => {
        const apiCall = async () => {
            await axios
            .request(options)
            .then(async function (response) {
                setData(response.data.body);
            });
        }

        apiCall().catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div className="flex flex-col gap-4 pb-7">
            {data.length > 1 ? (
                <>
                    <h1 className="self-center text-7xl sm:text-4xl text-white">Weekly Schedule</h1>
                    <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 p-6">
                        {data.map((game) => (
                            <GameRow
                            key={game.gameID}
                            home={game.teamIDHome}
                            away={game.teamIDAway}
                            week={game.gameWeek}
                            date={game.gameDate}
                            gameTime={game.gameTime}
                            season={game.season}
                            espn={game.espnLink}
                            cbs={game.cbsLink}
                            />
                        ))}
                    </div>
                </>
                ) : ('')}
            
            <div className="flex flex-col border-t-8 border-t-solid border-t-white">
                <h1 className="self-center text-7xl sm:text-4xl text-white">Team Schedule`s</h1>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                    {teams.map((team) => (
                        <Link key={team.id} to={`/schedule/${team.id}`}><TeamRow key={team.id} location={team.location} name={team.name} logo={team.logo} color={team.color} /></Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;