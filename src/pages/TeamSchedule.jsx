import React, { useEffect, useState } from "react";
import { teams } from "../constants";
import axios from "axios";
import { useLocation } from "react-router-dom";
import GameCard from "../components/GameCard";

const TeamSchedule = () => {
    const location = useLocation();
    const teamID = (location.pathname.split('/')[2]);
    const id = parseInt(teamID) + 1;
    const [games, setGames] = useState([{}]);
    let record = getRecord(games);
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule',
        params: {
            teamID: id,
            season: "2023",
        },
        headers: {
            'X-RapidAPI-Key': '77d2c4cb62mshd3d2499d617fd2bp16983fjsn3b406a2f1f93',
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        },
    };

    useEffect(() => {
        const apiCall = async () => {
            await axios
            .request(options)
            .then(async function (response) {
                setGames(response.data.body.schedule);
            });
        }

        apiCall().catch(function (error) {
            console.log(error);
        })
    }, []);

    function getRecord(games) {
        let rec = 0;
        for(let i = 0; i < games.length; i++) {
            if(games[i]?.seasonType === "Regular Season" && ((games[i]?.teamIDHome == id && games[i]?.homeResult === "W") || (games[i]?.teamIDAway == id && games[i]?.awayResult === "W"))) {
                rec++;
            }
        }
        return rec;
    }

    return(
        <div className={`${teams[teamID].color} text-white flex flex-col w-full`}>
            <header className="flex flex-row justify-between w-full p-5">
                <div className="flex flex-col">
                    <img className="h-[150px] w-[200px] lg:h-[125px] lg:w-[175px] md:h-[100px] md:w-[150px] sm:h-[75px] sm:w-[125px]" src={teams[teamID].logo} alt="team logo" />
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-2xl self-center">({record} - {17 - record})</h1>
                </div>
                <h1 className="text-7xl lg:text-5xl md:text-4xl sm:text-2xl self-center font-bold">{teams[teamID].location} {teams[teamID].name} (2023)</h1>
            </header>

            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                {games?.map((game) => (
                    <GameCard key={game.gameID} game={game} team={id} teams={teams} />
                ))}
            </div>
        </div>
    );
};

export default TeamSchedule;