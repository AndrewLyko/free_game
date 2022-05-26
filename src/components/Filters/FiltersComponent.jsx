import React, {useState} from 'react';
import {GENRES, PLATFORMS, SORT_BY, TAGS} from "../constants";

function FiltersComponent({setFilter}) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value)
    const [genre, setGenre] = useState(GENRES[0].value)
    const [tags, setTags] = useState(TAGS[0].value)
    const [sortBy, setSortBy] = useState(SORT_BY[0].value)

    function handlePlatform(event) {
        setPlatform(event.target.value)
        setFilter((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }

    function handleGenre(event) {
        setGenre(event.target.value)
        setFilter((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }


    function handleTags(event) {
        setTags(event.target.value)
        setFilter((prevState) => ({...prevState, [event.target.name]: event.target.value}))

    }

    function handleSortBy(event) {
        setSortBy(event.target.value)
        setFilter((prevState) => ({...prevState, [event.target.name]: event.target.value}))

    }

    return (
        <>
            <label for="platform"> Platform:</label>
            <select name="platform" id="platform" value={platform} onChange={handlePlatform}>
                {PLATFORMS.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="genres"> Genres:</label>
            <select name="genre" id="genres" value={genre} onChange={handleGenre}>
                {GENRES.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="tags"> Tags:</label>
            <select name="tags" id="tags" value={tags} onChange={handleTags}>
                {TAGS.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="sortBy"> Sort by:</label>
            <select name="sortBy" id="sortBy" value={sortBy} onChange={handleSortBy}>
                {SORT_BY.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>
        </>
    );
}

export default FiltersComponent;