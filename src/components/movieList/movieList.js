import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://my-json-server.typicode.com/Ashwanidubeyiitb/db_json/${type ? type : "popular"}`)
            .then(res => res.json())
            .then(data => setMovieList(data));
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type.toUpperCase() : "POPULAR").replace(/_/g, " ")}</h2>
            <div className="list__cards">
                {movieList.map(model => (
                    <Cards key={model.id} model={model} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
