import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const Home = () => {
    const [apiData, setApiData] = useState([{}]);

    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLNews',
        params: {
            recentNews: true,
            maxItems: '12',
        },
        headers: {
            'X-RapidAPI-Key': '77d2c4cb62mshd3d2499d617fd2bp16983fjsn3b406a2f1f93',
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
        }
    };

    useEffect(() => {
        const apiCall = async () => {
            await axios
            .request(options)
            .then(async function (response) {
                setApiData(response.data.body);
            });
        }

        apiCall().catch(function (error) {
            console.error(error);
        });
    }, []);

    return(
        <div className="h-full w-full text-white flex flex-col">
            <section className="flex flex-row sm:flex-col md:flex-col gap-8 m-8 sm:m-1 p-8 sm:p-0">
                <img
                 src="https://www.forbes.com/advisor/wp-content/uploads/2023/09/football-week-2.jpeg"
                 alt="hero background"
                 className="rounded-xl w-1/2 sm:w-full md:w-full shadow-xl"
                />

                <div className="w-1/2 sm:w-full md:w-full bg-gray-600 flex flex-col rounded-xl">
                    <h1 className="text-5xl sm:text-4xl md:text-6xl p-5 border-b-4 border-b-solid border-b-white">NFL Fantasy Info / Schedule</h1>
                    <p className="text-2xl sm:text-xl md:text-3xl p-5">
                        Check out our new NFL stat research application.
                        This application shows you nfl teams, stats, rosters, schedules, and much more.
                        Get all the information you need for your fantasy decisions.
                        Research individual player stats and compare between them.
                        Check out news stories below and click them for full story.
                    </p>
                </div>
            </section>

            {apiData.length > 1 ? (
                <section className="flex flex-col gap-2">
                    <h1 className="text-8xl sm:text-5xl p-5 self-center">Top News Stories</h1>
                    <hr className="h-[8px] bg-white"/>
                    <div>
                        <CardList news={apiData} />
                    </div>
                </section>
            ) : (
                ''
            )}
        </div>
    );
};

export default Home;