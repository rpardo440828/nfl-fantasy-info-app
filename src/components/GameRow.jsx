import React from "react";
import { teams } from "../constants";
import { Link } from "react-router-dom";

const GameRow = (props) => {
    const home = parseInt(props.home, 10) - 1;
    const away = parseInt(props.away, 10) - 1;
    const month = props.date[4] + props.date[5] + "/";
    const day = props.date[6] + props.date[7] + "/";
    const year = props.date[0] + props.date[1] + props.date[2] + props.date[3] ;
    const d = month + day + year;

    return(
        <div className="w-full p-5 flex flex-row justify-between bg-white rounded-2xl hover:cursor-pointer hover:scale-105 hover:duration-300">
            <div className="flex flex-col justify-center">
                <img className="h-[100px] w-[150px] lg:h-[50px] lg:w-[75px] sm:h-[50px] sm:w-[75px] self-center" src={teams[away].logo} alt="team logo" />
                <h1 className="text-xl lg:text-base sm:text-base font-bold self-center">{teams[away].location} {teams[away].name}</h1>
            </div>

            <div className="justify-self-center flex flex-col flex-wrap text-center gap-3 lg:gap-1 sm:gap-1">
                <h1 className="text-3xl lg:text-xl sm:text-xl font-bold">{props.week}</h1>
                <h2 className="text-2xl lg:text-lg sm:text-lg">{d}</h2>
                <h2 className="text-2xl lg:text-lg sm:text-lg">{props.gameTime}</h2>
                <div className="flex flex-row gap-[15px] justify-center">
                    <Link to={props.espn} target="_blank"><button className="text-lg w-[80px] lg:w-[60px] sm:w-[50px] sm:text-base p-2 text-white bg-red-600 rounded-xl hover:scale-125 hover:bg-red-800 hover:duration-300">ESPN</button></Link>
                    <Link to={props.cbs} target="_blank"><button className="text-lg w-[80px] lg:w-[60px] sm:w-[50px] sm:text-base p-2 text-white bg-blue-600 rounded-xl hover:scale-125 hover:bg-blue-800 hover:duration-300">CBS</button></Link>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <img className="h-[100px] w-[150px] lg:h-[50px] lg:w-[75px] sm:h-[50px] sm:w-[75px] self-center" src={teams[home].logo} alt="team logo" />
                <h1 className="text-xl lg:text-base sm:text-base font-bold self-center">{teams[home].location} {teams[home].name}</h1>
            </div>
        </div>
    );
} ;

export default GameRow;