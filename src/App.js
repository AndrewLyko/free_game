import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


import './App.css';
import HomeComponent from "./components/home/HomeComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponent/>}></Route>
                <Route path="/games/:id" element={<h1>games</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
