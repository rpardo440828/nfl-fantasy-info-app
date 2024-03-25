import React, { useEffect, useState } from "react";
import { teams } from "../constants";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PlayerInformation from "../components/PlayerInformation";
import PlayerSeasonStats from "../components/PlayerSeasonStats";
import PlayerGameStats from "../components/PlayerGameStats";

const PlayerInfo = () => {
    const location = useLocation();
    const teamID = (location.pathname.split('/')[2]);
    const playerID = (location.pathname.split('/')[3]);
    const [player, setPlayer] = useState([{}]);
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo',
        params: {
          playerID: playerID,
          getStats: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '77d2c4cb62mshd3d2499d617fd2bp16983fjsn3b406a2f1f93',
          'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const apiCall = async () => {
            await axios
            .request(options)
            .then(async function (response) {
                setPlayer(response.data.body);
            });
        }

        apiCall().catch(function (error) {
            console.error(error);
        });
    }, []);

    const month = player?.injury?.injDate[4] + player?.injury?.injDate[5] + "/";
    const day = player?.injury?.injDate[6] + player?.injury?.injDate[7] + "/";
    const year = player?.injury?.injDate[0] + player?.injury?.injDate[1] + player?.injury?.injDate[2] + player?.injury?.injDate[3] ;
    const d = month + day + year;

    return(
        <>
            <div className={`flex flex-col ${teams[teamID].color}`}>
                <header className="flex flex-row md:flex-col sm:flex-col gap-10 p-5 self-center">
                    <img className="h-[500px] w-[500px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px] rounded-[50%] bg-gray-300 self-center" src={player?.espnHeadshot} alt="headshot" />
                    <div className="flex flex-col gap-6 self-center border-solid border-2 border-white p-5">
                        <div className="flex flex-row gap-6">
                            <img className="h-[150px] w-[200px] lg:h-[100px] lg:w-[150px] md:h-[100px] md:w-[150px] sm:h-[50px] sm:w-[75px]" src={teams[teamID].logo} alt="team logo" />
                            <h1 className="text-7xl font-bold xl:text-5xl lg:text-5xl md:text-5xl sm:text-2xl text-white self-center">{player?.espnName}</h1>
                        </div>

                        <div className="flex flex-row gap-2 self-center">
                            <h2 className="text-white text-7xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl">{teams[teamID].location} {teams[teamID].name}</h2>
                        </div>

                        <div className="flex flex-row gap-2 self-center">
                            <h2 className="flex text-7xl xl:text-4xl xl:p-3 lg:text-4xl lg:p-3 md:text-4xl md:p-3 sm:text-2xl sm:p-2 text-white bg-gray-600 font-bold w-fit p-5 rounded-lg justify-center align-center">{player?.pos}</h2>
                            <h2 className="text-white text-7xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl self-center">#{player?.jerseyNum}</h2>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col justify-between m-8 p-8 gap-4 bg-white rounded-xl">
                    <PlayerInformation player={player} />
                </div>

                {player?.injury?.designation !== "" ? (
                    <div className="flex flex-col justify-between m-8 p-8 gap-4 bg-white rounded-xl">
                        <h1 className="text-black text-7xl sm:text-4xl font-bold border-b-2 border-b-solid border-b-black p-4">Injury Status</h1>
                        <div className="flex flex-row sm:flex-col justify-between p-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-gray-500 text-5xl sm:text-3xl font-bold sm:self-center">Injury Date</h1>
                                <h2 className="text-black text-4xl sm:text-2xl self-center font-bold">{d}</h2>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-gray-500 text-5xl sm:text-3xl font-bold sm:self-center">Designation</h1>
                                <h2 className="text-black text-4xl sm:text-2xl self-center font-bold">{player?.injury?.designation}</h2>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                                <h1 className="text-gray-500 text-5xl sm:text-3xl font-bold sm:self-center">Injury Description</h1>
                                <p className="text-black text-2xl sm:text-sm font-bold p-4 sm:self-center">{(player?.injury?.description) === "" ? "No Description Provided" : player?.injury?.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-between m-8 p-8 gap-4 bg-white rounded-xl">
                        <h1 className="text-black text-7xl sm:text-4xl font-bold border-b-2 border-b-solid border-b-black p-4">Injury Status</h1>
                        <h2 className="text-white w-fit p-5 rounded-xl bg-green-600 text-6xl sm:text-3xl">Active</h2>
                    </div>
                )
                }

                {((player?.pos === "C" || player?.pos === "G" || player?.pos === "OT" || player?.pos === "P" || player?.pos === "K" || player?.pos === "LS" || player?.pos === "PK")) ? ('') : (
                    <>
                        <div className="flex flex-col justify-between m-8 p-8 gap-4 bg-white rounded-xl">
                            <PlayerSeasonStats player={player} />
                        </div>
                        <div className="flex flex-col justify-between m-8 p-8 sm:p-2 gap-4 bg-white rounded-xl">
                            <PlayerGameStats id={playerID} pos={player?.pos} />
                        </div>
                    </>
                )
                }
            </div>
        </>
    );
};

export default PlayerInfo;