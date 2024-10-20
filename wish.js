loadWishes();
let randomIndex = 0;

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

async function checkCondition() {
    let conditionMet = false;

    const userDoc = await db.collection("Users").doc(firebase.auth().currentUser.uid).get();

    // Get the 'received' field from the document
    const receivedValue = userDoc.get('received');

    if (receivedValue === true) {
            conditionMet = true;
            await db.collection("Users").doc(firebase.auth().currentUser.uid).update({
                received: false
            });
            console.log("received yes");
    }else{
        console.log("no");
    }

    if (conditionMet) {
        showPing();
        conditionMet = false;
    }
    
}

function showPing() {
    console.log("ping");
    const pingElement = document.getElementById('ping');
    pingElement.classList.add('visible');
  
    setTimeout(() => {
      pingElement.classList.remove('visible');
    }, 3000);
  }

async function receiveWish(i){
    var stars = await db.collection("Wishes").doc('allWishes').get().then(doc => doc.get('wish'));
    const randomIndex = Math.floor(Math.random() * stars.length);
    console.log(randomIndex );
    console.log(stars[randomIndex].content);
    /*if(!imageVisible){
        const message = document.getElementById('wishMessage');
        message.classList.add('slide-up');
    }*/

    let sky = document.getElementById('sky');
    let wishStars = document.getElementById('wishStar');
    let e = document.createElement('span');
    e.id = "newWishMessage"
    e.addEventListener('click', () => openWish());
    e.innerHTML = '<span class="fallingStar material-symbols-outlined";>kid_star</span>';

    sky.appendChild(e);
    message.classList.remove('slide-up');
    messageButton.classList.remove('slide-up');
    
    let id = "star" + i;
    let doc = document.getElementById(id);
    wishStars.removeChild(doc);

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

setInterval(checkCondition, 5000);

function returnBtnFunction(){
    let e = document.getElementById('newWishMessage');
    returnBtn.classList.remove('slide-up');
    keepBtn.classList.remove('slide-up');
    e.innerHTML = '<span class="risingStar material-symbols-outlined";>kid_star</span>';
    setTimeout(function(){
        sky.removeChild(e);
    },4000)
}

async function keepBtnFunction(){
    let e = document.getElementById('newWishMessage');
    let sky = document.getElementById('sky');
    returnBtn.classList.remove('slide-up');
    keepBtn.classList.remove('slide-up');
    e.innerHTML = '<span class="risingStar material-symbols-outlined";>kid_star</span>';

    const jar = document.getElementById("jar");
    jar.src = "openJar.png";

    setTimeout(function(){
        sky.removeChild(e);
        e = document.createElement('span');
        e.id = "newWishMessage"
        e.addEventListener('click', () => openWish());
        e.innerHTML = '<span class="droppingStar material-symbols-outlined";>kid_star</span>';
    
        sky.appendChild(e);
        message.classList.remove('slide-up');
        messageButton.classList.remove('slide-up');
    
        setTimeout(function(){
            sky.removeChild(e);
            jar.src = "jar.png";
        },4000)
    },4000)

const stars = await db.collection("Wishes").doc('allWishes').get().then(doc => doc.get('wish'));

const usersSnapshot = await db.collection("Users").get();

usersSnapshot.forEach(async (userDoc) => {
    const userId = userDoc.id;
    const userEmail = userDoc.get('email');
    const matchedWish = stars[randomIndex].email === userEmail;
    if (matchedWish) {
        await db.collection("Users").doc(userId).update({
            received: true
        });
    }
});


}