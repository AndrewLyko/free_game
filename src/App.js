import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


import './App.css';
import HomeComponent from "./components/home/HomeComponent";
import GameDetails from "./components/GameDetails/GameDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponent/>}></Route>
                <Route path="/games/:id" element={<GameDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
