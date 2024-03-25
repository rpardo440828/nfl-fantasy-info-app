import React from "react";

const PlayerCard = (props) => {
    return(
        <div className="w-full p-4 flex flex-col bg-white text-black rounded-2xl hover:cursor-pointer hover:scale-105">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row md:flex-col sm:flex-col">
                    <img className="h-24 w-24 rounded-[50%]" src={props.player.espnHeadshot} alt="Player Headshot" />

                    <div className="flex flex-col self-center">
                        <h1 className="font-bold">{props.player.espnName}</h1>
                        <div className="flex flex-row gap-2">
                            <h2 className="flex text-white bg-gray-600 font-bold w-8 p-1 rounded-lg justify-center align-center">{props.player.pos}</h2>
                            <h2 className="text-gray-500 text-lg self-center">#{props.player.jerseyNum}</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col sm:align-center gap-6">
                    <div className="flex flex-col md:flex-row sm:flex-row gap-4">
                        <h1 className="font-bold">Ht</h1>
                        <h2 className="text-gray-500 text-lg">{props.player.height}</h2>
                    </div>

                    <div className="flex flex-col md:flex-row sm:flex-row gap-4">
                        <h1 className="font-bold">Wt</h1>
                        <h2 className="text-gray-500 text-lg">{props.player.weight}</h2>
                    </div>

                    <div className="flex flex-col md:flex-row sm:flex-row gap-4">
                        <h1 className="font-bold">Age</h1>
                        <h2 className="text-gray-500 text-lg">{props.player.age}</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between font-bold">
                {props.player.exp === "R" ? (
                    <h2>Rookie Year</h2>
                ) : (
                    <h2>Year {props.player.exp}</h2>
                )}
                <h2>{props.player.school}</h2>
            </div>
        </div>
    );
};

export default PlayerCard;