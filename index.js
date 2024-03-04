const fetchQuotes = async () => {
  try {
    const response = await fetch("https://stoic.tekloon.net/stoic-quote");
    const data = await response.json();
    setDocumentContent(data);
  } catch (error) {
    document.querySelector("#loader").textContent =
      "Site can't be reached, check the connection.";
    document.querySelector("button").style.display = "";
    document.querySelector("button").textContent = "Reload";
  }
}

const setImageSrc = async () => {
  listOfSrc = [
    "https://serenecosmo.neocities.org/assets/cat.png",
    "https://serenecosmo.neocities.org/assets/elephant.png",
    "https://serenecosmo.neocities.org/assets/lazy-cat.png",
    "https://serenecosmo.neocities.org/assets/cat-shopping.png",
  ];
  imageEl = document.querySelector("#image");
  randomSrc = listOfSrc[Math.floor(Math.random() * listOfSrc.length)];
  imageEl.src = await randomSrc;
}

const setDocumentContent = (data) => {
  document.querySelector("#author").textContent = "author: " + data.author;
  document.querySelector("#quote").textContent = data.quote;
  document.querySelector("button").textContent = "Discover";
  document.querySelector("#loader").style.display = "none";
  document.querySelector("button").style.display = "";
}

document.addEventListener("DOMContentLoaded", () => {setImageSrc();fetchQuotes();});
document.querySelector("#discover").addEventListener("click", ()=> {fetchQuotes(); setImageSrc()});
