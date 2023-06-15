const generate_meme_btn = document.querySelector(".meme-generator .generate-meme-button");
const meme_img = document.querySelector(".meme-generator img");
const meme_title = document.querySelector(".meme-generator .meme-title");
const meme_author = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) =>{
    meme_img.setAttribute("src", url);
    meme_title.innerHTML = title;
    meme_author.innerHTML = `Meme by ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/memes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
};
generate_meme_btn.addEventListener("click", generateMeme);
