import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/constants";

const localCache= {}


function UseFetch() {
    const [games, setGames] = useState([])

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('/games', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Host': API_HOST,
                'X-RapidAPI-Key': API_KEY
            }
        }).then(response => {
            if (response.data.status !== 0) {
                setGames(response.data)
            } else {
                setGames([])
            }
        }).catch(error => {
            setGames([])
        })
    }

    return {games};
}

export default UseFetch;