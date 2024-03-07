

import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/movieList/movieList";

const Home = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await axios.get("http://localhost:3001/models");
                setModels(response.data);
            } catch (error) {
                console.error("Error fetching models:", error);
            }
        };

        fetchModels();
    }, []);

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {models.map(model => (
                        <Link key={model.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${model.id}`} >
                            <div className="posterImage">
                                <img src={model.image} alt={model.name} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{model.name}</div>
                                <div className="posterImage__runtime">
                                    Rating: {model.rating}
                                </div>
                                <div className="posterImage__description">{model.description}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <MovieList />
            </div>
        </>
    );
};

export default Home;
