import React from "react";

const TeamRow = (props) => {
    return (
        <div className={`w-full p-5 flex flex-row justify-between ${props.color} text-white rounded-2xl hover:cursor-pointer hover:scale-105`}>
            <img className="h-[100px] w-[150px] lg:h-[50px] lg:w-[75px] md:h-[50px] md:w-[75px] sm:h-[50px] sm:w-[75px]" src={props.logo} alt="team logo" />
            <h1 className="text-4xl lg:text-3xl md:text-xl sm:text-2xl font-bold self-center">{props.location} {props.name}</h1>
        </div>
    );
};

export default TeamRow;