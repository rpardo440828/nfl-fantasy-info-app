import React from "react";

const PlayerSeasonStats = (props) => {
    return(
        <>
            <div className="flex flex-row justify-between border-b-solid border-b-2 border-b-black p-4">
                <h1 className="text-black text-7xl md:text-4xl sm:text-xl font-bold">Player Stats (2023)</h1>
                <h2 className="text-gray-500 text-5xl md:text-xl sm:text-lg font-bold self-center">{props?.player?.stats?.gamesPlayed} Games Played</h2>
            </div>

            {(props?.player.pos === "WR" || props?.player.pos === "TE") &&
                <div className="flex flex-row sm:flex-col justify-between p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Yards</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Receiving?.recYds}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Rec TD`s</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Receiving?.recTD)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Receptions</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Receiving?.receptions)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Average</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{(props?.player?.stats?.Receiving?.recYds / props?.player?.stats?.Receiving?.receptions).toFixed(2)}</h2>
                    </div>
                </div>
            }

            {props?.player.pos === "QB" &&
                <div className="flex flex-row sm:flex-col justify-between p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Yards</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Passing?.passYds}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Pass TD`s</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Passing?.passTD)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Interceptions</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Passing?.int)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Average</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{(props?.player?.stats?.Passing?.passYds / props?.player?.stats?.Passing?.passAttempts).toFixed(2)}</h2>
                    </div>
                </div>
            }

            {(props?.player.pos === "RB" || props?.player.pos === "FB") &&
                <div className="flex flex-row sm:flex-col justify-between p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Attempts</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Rushing?.carries}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Yards</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Rushing?.rushYds)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Rush TD`s</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Rushing?.rushTD)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Average</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{(props?.player?.stats?.Rushing?.rushYds / props?.player?.stats?.Rushing?.carries).toFixed(2)}</h2>
                    </div>
                </div>
            }

            {(props?.player.pos === "CB" || props?.player.pos === "SS" || props?.player.pos === "FS" || props?.player?.pos === "S") &&
                <div className="flex flex-row sm:flex-col justify-between p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Tackles</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Defense?.totalTackles}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Sacks</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Defense?.sacks}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Ints</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Defense?.defensiveInterceptions)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Pass Def.</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Defense?.passDeflections}</h2>
                    </div>
                </div>
            }

            {(props?.player.pos === "DE" || props?.player.pos === "DT" || props?.player.pos === "OLB" || props?.player.pos === "MLB" || props?.player.pos === "LB") &&
                <div className="flex flex-row sm:flex-col justify-between p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Tackles</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Defense?.totalTackles}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Sacks</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{props?.player?.stats?.Defense?.sacks}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">TFL`s</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Defense?.tfl)}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-500 text-5xl md:text-4xl sm:text-3xl sm:self-center font-bold">Ints</h1>
                        <h2 className="text-black text-4xl md:text-3xl sm:text-2xl self-center font-bold">{parseInt(props?.player?.stats?.Defense?.defensiveInterceptions)}</h2>
                    </div>
                </div>
            }
        </>
    )
};

export default PlayerSeasonStats;