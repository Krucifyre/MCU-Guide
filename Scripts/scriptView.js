const scriptFileName = `Scripts/${new URLSearchParams(window.location.search).get("param")}.js`;
const script = document.createElement('script');
script.setAttribute('src', scriptFileName);
script.setAttribute('type', 'module');

document.body.appendChild(script);
// history.replaceState({}, document.title, window.location.pathname);

if(scriptFileName.endsWith("WatchOrder.js")) {

    document.getElementById('spacer').style.height = "20vh";
    const styleElement = document.createElement('link');
    styleElement.setAttribute('rel', 'stylesheet');
    styleElement.setAttribute('href', 'Styles/OrderedView.css');
    document.head.appendChild(styleElement);
} else {

    const showHide = document.createElement('div');
    showHide.setAttribute('id', 'show-hide');
    
    const ex = "Expand All";
    function expandButton() {
        showHide.innerText = ex;
        showHide.style.backgroundColor = "#197c19"
    }
    function hideButton() {
        showHide.innerText = "Hide All";
        showHide.style.backgroundColor = "#1a819b"
    }

    document.getElementById('container').appendChild(showHide);
    expandButton();

    var activeCount = 0;
    const movieNameCard = document.getElementsByClassName('movie-name');
    var mxActiveCount = 0;

    showHide.addEventListener('click', () => {
        if(showHide.innerText == ex) {
            hideButton();
            activeCount = mxActiveCount;
            for(const card of movieNameCard) {
                card.classList.remove('active');
            }
            
        } else {
            expandButton();
            activeCount = 0;
            for(const card of movieNameCard) {
                card.classList.add('active');
            }
        }
    });
}