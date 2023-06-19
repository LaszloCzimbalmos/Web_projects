const colors = ['Green', 'red', 'gray', 'blue', 'yellow', 'gold', 'brown', 'purple'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', triggerdButton);
document.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        triggerdButton();
    }
});

function triggerdButton() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};
