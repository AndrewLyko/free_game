import React from 'react';
import useFetchGame from "../../hooks/useFetchGame";
import {Link, useParams} from "react-router-dom";

function GameDetails() {
    const {id} = useParams()
    const {
        game: {
            title,
            game_url,
            status,
            platform,
            publisher,
            release_date,
            description,
            screenshots
        }
    } = useFetchGame(id)

    return (
        <div style={{maxWidth: "600px", width: "100%", margin: "20px auto", padding: "10px"}}>
            <Link to="/" style={{
                textDecoration: "none",
                background: "blue",
                color: "white",
                fontWeight: "bold",
                padding: "15px 30px",
                borderRadius: "15px",
                margin: "5px 0",
                transform: "uppercase"
            }}>wstecz</Link>

            <a href={game_url} style={{textDecoration: "none", color: "black"}} target="_blank" rel="noreferrer">
                <h1>
                    {title}{" "}
                    <span style={{fontSize: "10px"}}>{status}</span>
                </h1>
            </a>
            <p>{platform}</p>
            <p><b>Publisher:</b> {publisher}, <b>release date:</b> {release_date}</p>
            <p>{description}</p>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {screenshots && (
                    screenshots
                        .map(({image, id}) => (<img src={image}
                                                    alt={image.split('/')[image.split('/').length - 1].split('.')[0]}
                                                    key={id}
                                                    style={{maxWidth: "280px", width: "100%", padding: "0 10px 10px 0"}}

                        />))
                )}
            </div>
        </div>

    );
}

export default GameDetails;