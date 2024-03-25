import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Schedule from "./pages/Schedule";
import TeamSchedule from "./pages/TeamSchedule";
import Research from "./pages/Research";
import TeamRoster from "./pages/TeamRoster";
import PlayerInfo from "./pages/PlayerInfo";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/schedule",
        element: <Schedule />
      },
      {
        path: "/schedule/:id",
        element: <TeamSchedule />
      },
      {
        path: "/research",
        element: <Research />
      },
      {
        path: "/research/:id",
        element: <TeamRoster />
      },
      {
        path: "/research/:id/:playerID",
        element: <PlayerInfo />
      }
    ]
  },
]);

function App() {
  return (
    <div className="w-full h-full bg-gray-400">
      <div className='w-full'>
       <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
