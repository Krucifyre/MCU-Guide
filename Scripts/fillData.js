export function createMovieInContainer(movieName, order) {
    const container = document.getElementById("container");
    const movieTemplate = document.getElementById('movie-template');

    const newMovie = movieTemplate.content.cloneNode(true);
    mxActiveCount++;

    fillDataOfMovieNameCard(newMovie.firstElementChild, movieName, order);
    container.appendChild(newMovie);
}

function fillDataOfMovieNameCard(movieNameBlock, movieName, order) {

    const card = movieNameBlock.firstElementChild;
    card.style.backgroundImage = `url(${movieName.imgLink})`;
    
    if(movieName.color != undefined)
        card.style.color = movieName.color;

    card.addEventListener('click', () => {
        movieNameBlock.classList.toggle('active')? activeCount-- : activeCount++;

        if(activeCount == 0)
            expandButton();
        else if(activeCount == mxActiveCount)
            hideButton();
    });

    const cardChildren = card.children;
    cardChildren[0].innerText = movieName.years;
    cardChildren[1].innerText = `Chapters - ${movieName.parts.length}`;
    cardChildren[2].innerText = movieName.title;

    for(const idx of movieName.parts) {
        const moviePartTemplate = document.getElementById('movie-parts-template');
        const moviePart = moviePartTemplate.content.cloneNode(true);

        fillDataInMoviePart(moviePart.firstElementChild, order[idx]);
        movieNameBlock.appendChild(moviePart);
    }
}

export function fillInOrder(order) {
    for(let idx=1; idx < order.length; idx++) {

        const moviePartTemplate = document.getElementById('movie-parts-template');
        const moviePart = moviePartTemplate.content.cloneNode(true);
        const partCard = moviePart.firstElementChild;
        partCard.children[1].innerText = idx+". ";

        fillDataInMoviePart(partCard, order[idx]);
        document.getElementById('container').appendChild(moviePart);
    }
}

function fillDataInMoviePart(partCard, movie) {
    partCard.style.color = movie.color;
    const partChildren = partCard.children;

    partChildren[0].style.backgroundImage = `url(${movie.imgLink})`;
    partChildren[1].innerText += movie.title;
    partChildren[3].innerText = movie.genres;

    const miniDataChildren = partChildren[2].children;
    miniDataChildren[0].innerText = movie.year;
    miniDataChildren[1].innerText = `${movie.duration[0]}h ${movie.duration[1]}m`;
    miniDataChildren[2].innerText = movie.language;
}