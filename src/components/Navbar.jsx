import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between w-full text-white border-b-[8px] border-b-white">
            <div>
                <img
                 className="bg-none w-[250px] h-[161px] sm:w-[150px] sm:h-[100px] rounded-[50%] p-3"
                 src="https://w0.peakpx.com/wallpaper/134/985/HD-wallpaper-american-football-ball-nfl-national-football-league-usa-wilson-ball-sports-equipment-thumbnail.jpg"
                 alt="logo"
                />
            </div>

            <div className="flex flex-row gap-8 sm:gap-1 md:gap-4 items-center text-5xl sm:text-xl md:text-3xl p-5 sm:p-2">
                <Link to={`/`} className="hover:cursor-pointer hover:bg-green-600 hover:scale-105 duration-300 rounded-2xl"><button className="p-5 sm:p-2">Home</button></Link>
                <Link to={`/research`} className="hover:cursor-pointer hover:bg-green-600 hover:scale-105 duration-300 rounded-2xl"><button className="p-5 sm:p-2">Research</button></Link>
                <Link to={`/schedule`} className="hover:cursor-pointer hover:bg-green-600 hover:scale-105 duration-300 rounded-2xl"><button className="p-5 sm:p-2">Schedule</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;