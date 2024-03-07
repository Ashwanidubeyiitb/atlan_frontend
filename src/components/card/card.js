

import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ model }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link
                    to={`/movie/${model.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <div className="cards">
                        <img className="cards__img" src={model.image} alt={model.name} />
                        <div className="cards__overlay">
                            <div className="card__title">{model.name}</div>
                            <div className="card__rating">Rating: {model.rating}</div>
                            <div className="card__description">{model.description}</div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Card;
