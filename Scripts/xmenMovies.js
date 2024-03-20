document.title = "X-Men: Movie";

import {createMovieInContainer} from "./fillData.js";
import {movies, order} from "../Data/XmenData.js";

for(const movie of movies) {
    createMovieInContainer(movie, order);
}