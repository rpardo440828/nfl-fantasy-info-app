import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayerStatRow from "./PlayerStatRow";

const PlayerGameStats = (props) => {
    const [games, setGames] = useState({});
    const [keys, setKeys] = useState([]);
    const id = props?.id;
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLGamesForPlayer',
        params: {
            playerID : id,
            fantasyPoints: 'true',
            season: '2023',
            numberOfGames: '17',
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
                setGames(response.data.body);
                setKeys(Object.keys(response.data.body));
            });
        }

        apiCall().catch(function (error) {
            console.error(error);
        });
    }, []);

    return(
        <>
            <div className="flex flex-row justify-between border-b-solid border-b-2 border-b-black p-4">
                <h1 className="text-black text-7xl md:text-4xl sm:text-2xl font-bold">Player Game Stats (2023)</h1>
            </div>
            {(games !== undefined && keys.length > 1) &&
                <>
                    {((props?.pos === "WR" || props?.pos === "TE")) &&
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Game</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Date</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Fantasy Pts</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Yds</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TD`s</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Rec</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Avg</th>
                                </tr>
                            </thead>

                            <tbody>
                                {keys?.map((key) => (
                                    <PlayerStatRow key={key} game={games[key]} stat="rec" />
                                ))}
                            </tbody>
                        </table>
                    }

                    {(props?.pos === "RB" || props?.pos === "FB") &&
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Game</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Date</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Fantasy Pts</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Yds</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TD`s</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Att</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Avg</th>
                                </tr>
                            </thead>

                            <tbody>
                                {keys.map((key) => (
                                    <PlayerStatRow game={games[key]} stat="rush" />
                                ))}
                            </tbody>
                        </table>
                    }

                    {(props?.pos === "QB") &&
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Game</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Date</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Fantasy Pts</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">QBR</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Yds</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TD`s</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Ints</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Avg</th>
                                </tr>
                            </thead>

                            <tbody>
                                {keys.map((key) => (
                                    <PlayerStatRow game={games[key]} stat="pass" />
                                ))}
                            </tbody>
                        </table>
                    }

                    {(props?.pos === "DE" || props?.pos === "DT" || props?.pos === "OLB" || props?.pos === "MLB" || props?.pos === "LB") &&
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Game</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Date</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Tackles</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Solo</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">QB Hits</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Sacks</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TFL</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Ints</th>
                                </tr>
                            </thead>

                            <tbody>
                                {keys.map((key) => (
                                    <PlayerStatRow game={games[key]} stat="df" />
                                ))}
                            </tbody>
                        </table>
                    }

                    {(props?.pos === "CB" || props?.pos === "SS" || props?.pos === "FS" || props?.pos === "S") &&
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Game</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Date</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Tackles</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Solo</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TFL</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">TD`s</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Ints</th>
                                    <th className="text-3xl md:text-xl sm:text-[12px] sm:leading-5 font-bold border-solid border-2 border-black" scope="col">Pass Def</th>
                                </tr>
                            </thead>

                            <tbody>
                                {keys.map((key) => (
                                    <PlayerStatRow game={games[key]} stat="db" />
                                ))}
                            </tbody>
                        </table>
                    }
                </>
            }
        </>
    );
};

export default PlayerGameStats;