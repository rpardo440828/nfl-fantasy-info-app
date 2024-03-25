import React, { useEffect, useState } from "react";
import { teams } from "../constants";
import { Link } from "react-router-dom";
import TeamRow from "../components/TeamRow";
import axios from "axios";

const Research = () => {

    return(
        <div className="flex flex-col gap-4 pb-7">


            <h1 className="self-center text-7xl sm:text-3xl text-white">Player Stats By Rosters</h1>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 p-6">
                {teams.map((team) => (
                    <Link to={`/research/${team.id}`}><TeamRow key={team.id} location={team.location} name={team.name} logo={team.logo} color={team.color} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Research;