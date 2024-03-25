import React from "react";

const PlayerInformation = (props) => {
    return(
        <>
            <h1 className="text-black text-7xl sm:text-4xl font-bold border-b-solid border-b-2 border-b-black p-4">Player Info</h1>
            <div className="flex flex-row justify-between p-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">Height</h2>
                    <h3 className="text-black text-4xl font-bold sm:text-xl self-center">{props?.player?.height}</h3>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">Weight</h2>
                    <h3 className="text-black text-4xl font-bold sm:text-xl self-center">{props?.player?.weight}lbs</h3>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">Age</h2>
                    <h3 className="text-black text-4xl font-bold sm:text-xl self-center">{props?.player?.age}</h3>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">School</h2>
                    <h3 className="text-black text-4xl font-bold sm:text-xl self-center">{props?.player?.school}</h3>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">Exp</h2>
                    {props?.player.exp === "R" ? (
                        <h2 className="text-black text-4xl font-bold sm:text-xl self-center">Rookie Year</h2>
                    ) : (
                        <h2 className="text-black text-4xl font-bold sm:text-xl self-center">Year {props?.player?.exp}</h2>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-6xl sm:text-3xl">DOB</h2>
                    <h3 className="text-black text-4xl font-bold sm:text-xl self-center">{props?.player?.bDay}</h3>
                </div>
            </div>
        </>
    );
};

export default PlayerInformation;