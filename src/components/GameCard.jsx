import React from "react";

const GameCard = (props) => {
    const home = props.game.teamIDHome - 1;
    const away = parseInt(props.game.teamIDAway) - 1;
    const didTeamWin = (parseInt(props.game.teamIDHome) === props.team && props.game.homeResult === "W") || (parseInt(props.game.teamIDAway) === props.team && props.game.awayResult === "W");

    return(
        <>
            <div className="flex flex-col bg-white text-black gap-4 p-5 rounded-xl hover:scale-105">
                <h1 className="text-4xl font-bold self-center">{props.game.gameWeek}</h1>
                {parseInt(props.game.teamIDHome) !== props.team ? (
                    <div className="flex flex-row justify-center">
                        <h1 className="text-5xl self-center">@</h1>
                        <img src={props.teams[home]?.logo} alt="opponent logo" />
                    </div>
                ) : (
                    <div className="flex flex-row gap-3 justify-center">
                        <img src={props.teams[away].logo} alt="opponent logo" />
                    </div>
                )}

                <h2 className="text-4xl self-center">{props.game.gameTime}</h2>

                <div className="flex flex-row gap-3 self-center">
                    {didTeamWin === true ? (
                        <h2 className="text-4xl text-green-600">W</h2>
                    ) : (
                        <h2 className="text-4xl text-red-600">L</h2>
                    )}

                    <h2 className="text-4xl">{props.game.awayPts} - {props.game.homePts}</h2>
                </div>
            </div>
        </>
    );
};

export default GameCard;