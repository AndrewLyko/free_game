import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/constants";

const localCache = {}


function UseFetch({platform, sortBy, genre, tags}) {
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
            },
            params: {
                platform,
                category: genre,
                "sort-by": sortBy,
                tags
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