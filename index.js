//
async function getQuotes(){
    let url = 'https://stoic.tekloon.net/stoic-quote';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        document.querySelector('#author').textContent = 'author: ' + data.author;
        document.querySelector('#quote').textContent = data.quote;
        document.querySelector('button').textContent = 'Discover';
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('button').style.display = '';
    }).catch(() => {
        document.querySelector('#loader').textContent = "Site can't be reached, check the connection.";
        document.querySelector('button').style.display = '';
        document.querySelector('button').textContent = 'Reload';
    })
}
//getQuotes();
document.addEventListener('DOMContentLoaded', getQuotes)
//
function randomImageSrc(){
   srcList = [
    'https://serenecosmo.neocities.org/assets/cat.png',
    'https://serenecosmo.neocities.org/assets/elephant.png',
    'https://serenecosmo.neocities.org/assets/lazy-cat.png',
    'https://serenecosmo.neocities.org/assets/cat-shopping.png'
   ]
   imageEl = document.querySelector('#image');
   randomSrc = srcList[Math.floor(Math.random() * srcList.length)];
   imageEl.src = randomSrc;
}

document.querySelector('#discover').addEventListener('click', getQuotes)
document.querySelector('#discover').addEventListener('click', randomImageSrc)
