document.title = "Marvel Knights: Series";

import {createMovieInContainer} from "./fillData.js";
import {series, order} from "../Data/MarvelKnightsData.js";

for(const s of series) {
    createMovieInContainer(s, order);
}