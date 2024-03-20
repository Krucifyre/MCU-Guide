document.title = "Marvel Cinematic Universe: Movies and Series";

import {createMovieInContainer} from "./fillData.js";
import {movies, order} from "../Data/MCUData.js";

for(const movie of movies) {
    createMovieInContainer(movie, order);
}