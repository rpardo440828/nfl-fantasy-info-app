import React from "react";

const PlayerStatRow = (props) => {
    const game = (props?.game?.gameID)?.substring(9);
    const d = (props?.game?.gameID)?.substring(0,8);
    const month = props?.game?.gameID ? d[4] + d[5] + "/" : '';
    const day = props?.game?.gameID ? d[6] + d[7] + "/" : '';
    const year = props?.game?.gameID ? d[0] + d[1] + d[2] + d[3] : '';
    const date = month + day + year;
    return(
        <>
            {props?.stat === "rec" &&
                <tr>
                    <th className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 border-solid border-2 border-black" scope="row">{game}</th>
                    <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black">{date}</td>
                    {('Receiving' in props?.game) === false ? (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                        </>
                    ) : (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.fantasyPointsDefault?.standard}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Receiving?.recYds}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Receiving?.recTD}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Receiving?.receptions}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Receiving?.recAvg}</td>
                        </>
                    )}
                </tr>
            }

            {props?.stat === "rush" &&
                <tr>
                    <th className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 border-solid border-2 border-black" scope="row">{game}</th>
                    <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black">{date}</td>
                    {('Rushing' in props?.game) === false ? (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                        </>
                    ) : (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.fantasyPointsDefault?.standard}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Rushing?.rushYds}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Rushing?.rushTD}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Rushing?.carries}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Rushing?.rushAvg}</td>
                        </>
                    )}
                </tr>
            }

            {props?.stat === "pass" &&
                <tr>
                    <th className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 border-solid border-2 border-black" scope="row">{game}</th>
                    <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black">{date}</td>
                    {('Passing' in props?.game) === false ? (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                        </>
                    ) : (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.fantasyPointsDefault?.standard}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Passing?.qbr}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Passing?.passYds}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Passing?.passTD}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Passing?.int}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Passing?.passAvg}</td>
                        </>
                    )}
                </tr>
            }

            {props?.stat === "df" &&
                <tr>
                    <th className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 border-solid border-2 border-black" scope="row">{game}</th>
                    <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black">{date}</td>
                    {('Defense' in props?.game) === false ? (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                        </>
                    ) : (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.totalTackles}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.soloTackles}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.qbHits}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.sacks}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.tfl}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.defensiveInterceptions}</td>
                        </>
                    )}
                </tr>
            }

            {props?.stat === "db" &&
                <tr>
                    <th className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 border-solid border-2 border-black" scope="row">{game}</th>
                    <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black">{date}</td>
                    {('Defense' in props?.game) === false ? (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{0}</td>
                        </>
                    ) : (
                        <>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.totalTackles}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.soloTackles}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.tfl}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.defTD}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.defensiveInterceptions}</td>
                            <td className="text-2xl md:text-xl sm:text-[10px] sm:leading-5 text-center border-solid border-2 border-black hover:duration-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">{props?.game?.Defense?.passDeflections}</td>
                        </>
                    )}
                </tr>
            }
        </>
    );
};

export default PlayerStatRow;