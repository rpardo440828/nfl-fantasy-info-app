import React, { useEffect, useState } from "react";
import { teams } from "../constants";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";

const TeamRoster = () => {
    const location = useLocation();
    const teamID = (location.pathname.split('/')[2]);
    const id = parseInt(teamID) + 1;
    const [QBs, setQBs] = useState([{}]);
    const [WRs, setWRs] = useState([{}]);
    const [RBs, setRBs] = useState([{}]);
    const [TEs, setTEs] = useState([{}]);
    const [OLines, setOLines] = useState([{}]);
    const [CBs, setCBs] = useState([{}]);
    const [Ss, setSs] = useState([{}]);
    const [LBs, setLBs] = useState([{}]);
    const [DLines, setDLines] = useState([{}]);
    const [Specials, setSpecials] = useState([{}]);
    const [roster, setRoster] = useState([{}]);
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
        params: {
            teamID: id,
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
                setRoster(response.data.body.roster);
            });
        }

        apiCall().catch(function (error) {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        function assignPositions(roster) {
            const qbs = [];
            const wrs = [];
            const rbs = [];
            const tes = [];
            const olines = [];
            const cbs = [];
            const ss = [];
            const lbs = [];
            const dlines = [];
            const specials = [];

            for(let i = 0; i < roster.length; i++) {
                if(roster[i]?.pos === "QB") qbs.push(roster[i]);
                else if(roster[i]?.pos === "RB" || roster[i]?.pos === "FB") rbs.push(roster[i]);
                else if(roster[i]?.pos === "WR") wrs.push(roster[i]);
                else if(roster[i]?.pos === "TE") tes.push(roster[i]);
                else if(roster[i]?.pos === "CB") cbs.push(roster[i]);
                else if(roster[i]?.pos === "S") ss.push(roster[i]);
                else if(roster[i]?.pos === "LB") lbs.push(roster[i]);
                else if(roster[i]?.pos === "DE" || roster[i]?.pos === "DT") dlines.push(roster[i]);
                else if(roster[i]?.pos === "OT" || roster[i]?.pos === "G" || roster[i]?.pos === "C") olines.push(roster[i]);
                else if(roster[i]?.pos === "LS" || roster[i]?.pos === "P" || roster[i]?.pos === "K" || roster[i]?.pos === "PK") specials.push(roster[i]);
            }
            setQBs(qbs);
            setWRs(wrs);
            setRBs(rbs);
            setTEs(tes);
            setOLines(olines);
            setCBs(cbs);
            setSs(ss);
            setLBs(lbs);
            setDLines(dlines);
            setSpecials(specials);
        };
        assignPositions(roster);
    },[roster]);
    
    return(
        <div>
            <div className={`${teams[teamID].color} text-white flex flex-col w-full`}>
                <header className="flex flex-row justify-between w-full p-5 sm:p-3">
                    <img className="h-[150px] w-[200px] md:h-[100px] md:w-[150px] sm:h-[50px] sm:w-[100px]" src={teams[teamID].logo} alt="team logo" />
                    <h1 className="text-2xl 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-5xl font-bold self-center">{teams[teamID].location} {teams[teamID].name}</h1>
                </header>

                {roster.length > 1 &&
                    <>
                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">QB</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {QBs.length > 1 &&
                                    <>
                                        {QBs?.map((QB) => (
                                            <Link to={`/research/${teamID}/${QB.playerID}`}><PlayerCard player={QB} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">RB</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {RBs.length > 1 &&
                                    <>
                                        {RBs?.map((RB) => (
                                            <Link to={`/research/${teamID}/${RB.playerID}`}><PlayerCard player={RB} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">WR</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {WRs.length > 1 &&
                                    <>
                                        {WRs?.map((WR) => (
                                            <Link to={`/research/${teamID}/${WR.playerID}`}><PlayerCard player={WR} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">TE</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {TEs.length > 1 &&
                                    <>
                                        {TEs?.map((TE) => (
                                            <Link to={`/research/${teamID}/${TE.playerID}`}><PlayerCard player={TE} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">Offensive Line</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {OLines.length > 1 &&
                                    <>
                                        {OLines?.map((OLine) => (
                                            <Link to={`/research/${teamID}/${OLine.playerID}`}><PlayerCard player={OLine} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">CB</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {CBs.length > 1 &&
                                    <>
                                        {CBs?.map((CB) => (
                                            <Link to={`/research/${teamID}/${CB.playerID}`}><PlayerCard player={CB} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">Safties</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {Ss.length > 1 &&
                                    <>
                                        {Ss?.map((S) => (
                                            <Link to={`/research/${teamID}/${S.playerID}`}><PlayerCard player={S} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">LB</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {LBs.length > 1 &&
                                    <>
                                        {LBs?.map((LB) => (
                                            <Link to={`/research/${teamID}/${LB.playerID}`}><PlayerCard player={LB} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">Defensive Line</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {DLines.length > 1 &&
                                    <>
                                        {DLines?.map((DLine) => (
                                            <Link to={`/research/${teamID}/${DLine.playerID}`}><PlayerCard player={DLine} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col m-5 p-5 gap-6 border-solid border-4 border-white rounded-xl">
                            <h1 className="text-white text-6xl border-b-solid border-b-4 border-b-white p-5">Special Teams</h1>
                            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                                {Specials.length > 1 &&
                                    <>
                                        {Specials?.map((Special) => (
                                            <Link to={`/research/${teamID}/${Special.playerID}`}><PlayerCard player={Special} /></Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default TeamRoster;