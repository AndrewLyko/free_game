import React, {useState} from 'react';
import useFetch from "../../hooks/useFetch";
import GameCard from "../GameCard/GameCard";
import FiltersComponent from "../Filters/FiltersComponent";

function GameList() {
    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    });

    const {games} = useFetch(filter);


    return (
        <>
            <FiltersComponent setFilter={setFilter}/>
        <div style={{display: "flex", flexWrap: "wrap",}}>
            {games.map((game)=> (
                <GameCard key={game.id} game={game}/>
            ))}
        </div>
        </>
    );
}

export default GameList;