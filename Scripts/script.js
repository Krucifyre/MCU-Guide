const multiverse = document.querySelectorAll(".marvel");

let mxWidthUniverse = 0;
for(const universe of multiverse) {
    let curWidth = universe.getBoundingClientRect().width;
    mxWidthUniverse = Math.max(mxWidthUniverse, curWidth);
    universe.classList.add('active');

    const viewCategories = universe.getElementsByTagName('p');
    let mxWidth = 0;
    
    for(const category of viewCategories) {
        curWidth = category.getBoundingClientRect().width;
        mxWidth = Math.max(mxWidth, curWidth);
        category.style.transitionDuration = "0.2s";
    }

    for(const category of viewCategories) {
        category.style.width = mxWidth+"px";
    }

    universe.classList.remove('active');
}

let curActive = null;
function activate(universe) {
    if(universe.classList.contains('active')) {
        curActive.classList.remove('active');
        curActive = null;
        return;
    }

    curActive?.classList.remove('active');
    curActive = universe;
    curActive.classList.add('active');
}

for(const universe of multiverse) {
    universe.style.width = mxWidthUniverse+"px";
    universe.addEventListener('click', () => activate(universe));
}

const moviesSeries = document.querySelectorAll('.movies-series');
for(const ms of moviesSeries) {
    ms.addEventListener('click', (e) => window.location.href = `ViewMoviesSeries.html?param=${e.target.id}`);
}