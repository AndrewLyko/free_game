import React, {useState} from 'react';
import useFetch from "../../hooks/useFetch";

function GameList() {
    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    });

    const {games} = useFetch(filter);


    return (
        <pre>{JSON.stringify(games, null, 2)}</pre>
    );
}

export default GameList;