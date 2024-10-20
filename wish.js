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

        img.addEventListener('click', () => receiveWish(i));

        document.getElementById('wishStar').appendChild(img);
    }
}

async function receiveWish(){
    var stars = await db.collection("Wishes").doc('allWishes').get().then(doc => doc.get('wish'));
    const randomIndex = Math.floor(Math.random() * stars.length);
    console.log(randomIndex );
    console.log(stars[randomIndex].content);
    if(!imageVisable){
        const message = document.getElementById('wishMessage');
        message.classList.add('slide-up');
    }


}