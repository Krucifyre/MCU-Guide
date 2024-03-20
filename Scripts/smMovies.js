document.title = "SpiderMan: Movies";

import {createMovieInContainer} from "./fillData.js";
import {movies, order} from "../Data/SMData.js";

for(const movie of movies) {
    createMovieInContainer(movie, order);
}