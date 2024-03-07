import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0,0);
    }, [id]);

    const getData = () => {
        let url;
        if (parseInt(id) <= 10) {
            url = `http://localhost:3001/models/${id}`;
        } else if (parseInt(id) <= 20) {
            url = `http://localhost:3001/popular/${id}`;
        } else if (parseInt(id) <= 30) {
            url = `http://localhost:3001/top_rated/${id}`;
        } else if (parseInt(id) <= 40) {
            url = `http://localhost:3001/upcoming/${id}`;
        } else {
            // Handle error or redirect to a not found page
            console.error("Invalid ID");
            return;
        }

        fetch(url)
        .then(res => res.json())
        .then(data => setMovie(data))
        .catch(error => {
            console.error("Error fetching data:", error);
            // Handle error here
        });
    };

    

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail ? currentMovieDetail.image : ""} alt={currentMovieDetail ? currentMovieDetail.name : ""} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currentMovieDetail ? currentMovieDetail.image : ""} alt={currentMovieDetail ? currentMovieDetail.name : ""} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                        <div className="movie__rating">{currentMovieDetail ? currentMovieDetail.rating : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Description</div>
                        <div>{currentMovieDetail ? currentMovieDetail.description : ""}</div>
                    </div>
                </div>
            </div>

            <div className="movie__ide">
                <h1>Have a sight on code</h1>
                <p>______________________________________</p>
                <div className="blackDiv">
                    {/* ML/AI Python code */}
                    <pre>
                        <code>
                            {`
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.read_csv('dataset.csv')
X = data.drop('target', axis=1)
y = data['target']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate model
accuracy = model.score(X_test, y_test)
print('Model Accuracy:', accuracy)
                            `}
                        </code>
                    </pre>
                </div>
                <div className="whiteDiv">
                    {/* Output of the Python code */}
                    {/* Output of the ML/AI code */}
                    <pre>
                        <code>
                            {`
Model Accuracy: 0.85

                            `}
                        </code>
                    </pre>
                </div>
            </div>
            <div className="options">
                <button >Run</button>
                <button >Compile</button>
                {/* Add more options as needed */}
            </div>
        </div>
    );
};

export default Movie;
