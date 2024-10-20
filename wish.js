loadWishes();

function getRandomPosition(containerWidth, containerHeight, imageWidth, imageHeight) {
    const x = Math.floor(Math.random() * (containerWidth - imageWidth));
    const y = Math.floor(Math.random() * (containerHeight - imageHeight));
    return { x, y };
  }

async function loadWishes(){
    for (i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = 'brightStar.png';
        img.classList.add('starBright');

        const { x, y } = getRandomPosition(1500, 400, 50, 50);
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.id = "star" + i;

        (function(index) {
            img.addEventListener('click', () => receiveWish(index));
        })(i);

        document.getElementById('wishStar').appendChild(img);
    }
}

function returnBtnFunction(){
    let e = document.getElementById('newWishMessage');
    returnBtn.classList.remove('slide-up');
    keepBtn.classList.remove('slide-up');
    e.innerHTML = '<span class="risingStar material-symbols-outlined";>kid_star</span>';
    setTimeout(function(){
        sky.removeChild(e);
    },4000)
}

function keepBtnFunction(){

}