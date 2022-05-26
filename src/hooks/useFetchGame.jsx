import {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "./constants";

function useFetchGame(id) {
    const [game, setGame] = useState({})

    useEffect(()=> {
        getData(id)
    }, [])

    function getData(id){
        axios.get('/game', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Host': API_HOST,
                'X-RapidAPI-Key': API_KEY
            },
            params: {
                id
            }
        }).then(response => {
            if (response.data.status !== 0) {
                setGame(response.data)
            } else {
                setGame([])
            }
        }).catch(error => {
            setGame([])
        })
    }

    return {game} ;
}

export default useFetchGame;