

const receivedMessage = document.getElementById('receivedMessage');
document.getElementById("receivedMessage").style.visibility = "hidden";
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

async function receiveWish(i){
    var stars = await db.collection("Wishes").doc('allWishes').get().then(doc => doc.get('wish'));
    let sky = document.getElementById('sky');
    let wishStars = document.getElementById('wishStar');
    const receivedMessage = document.getElementById('receivedMessage');
    const randomIndex = Math.floor(Math.random() * stars.length);
    let animation = document.getElementById('animation');
    document.getElementById("animation").style.visibility = "hidden";
    document.getElementById("message").style.visibility = "hidden";
    animation.classList.add('slide-up');
    content = stars[randomIndex].content;
    console.log(content);
    let e = document.createElement('span');
    e.id = "newWishMessage"
    e.addEventListener('click', () => openWish());
    e.innerHTML = '<span class="fallingStar material-symbols-outlined";>kid_star</span>';

    sky.appendChild(e);
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
        receivedMessage.innerText = content;
        console.log(message);

        document.getElementById('wishStar').appendChild(img);
        animation.src = 'animation10.png'
        setTimeout(function(){
        sky.removeChild(e);
            document.getElementById("animation").style.visibility = "visible";
            setTimeout(function(){
                animation.src = 'animation9.png'
                setTimeout(function(){
                    animation.src = 'animation8.png'
                    setTimeout(function(){
                        animation.src = 'animation7.png'
                        setTimeout(function(){
                            animation.src = 'animation6.png'
                            setTimeout(function(){
                                animation.src = 'animation5.png'
                                setTimeout(function(){
                                    animation.src = 'animation4.png'
                                    setTimeout(function(){
                                        animation.src = 'animation3.png'
                                        setTimeout(function(){
                                            animation.src = 'animation2.png'
                                            setTimeout(function(){
                                                animation.src = 'animation1.png'
                                                
    document.getElementById("animation").style.visibility = "visible";
    document.getElementById("receivedMessage").style.visibility = "visible";
    returnBtn.classList.add('slide-up');
    keepBtn.classList.add('slide-up');
                                            }, 500);
                                        }, 250);
                                    }, 250);
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 4000);
}

setInterval(checkCondition, 5000);

function returnBtnFunction(){
    const message = document.getElementById('message');
    message.value = '';
    const receivedMessage = document.getElementById('receivedMessage');
    document.getElementById("receivedMessage").style.visibility = "hidden";
    returnBtn.classList.remove('slide-up');
    keepBtn.classList.remove('slide-up');
    let animation = document.getElementById('animation');
    const messageButton = document.getElementById('messageButton');
    document.getElementById("messageButton").style.visibility = "hidden";
    messageButton.classList.remove('slide-up');
    document.getElementById('message').value = '';
    animation.classList.add('slide-up');
    setTimeout(function(){
        animation.src = 'animation1.png'
        setTimeout(function(){
            animation.src = 'animation2.png'
            setTimeout(function(){
                animation.src = 'animation3.png'
                setTimeout(function(){
                    animation.src = 'animation4.png'
                    setTimeout(function(){
                        animation.src = 'animation5.png'
                        setTimeout(function(){
                            animation.src = 'animation6.png'
                            setTimeout(function(){
                                animation.src = 'animation7.png'
                                setTimeout(function(){
                                    animation.src = 'animation8.png'
                                    setTimeout(function(){
                                        animation.src = 'animation9.png'
                                        setTimeout(function(){
                                            animation.src = 'animation10.png'
                                            document.getElementById("messageButton").style.visibility = "visible";
                                        }, 500);
                                    }, 250);
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);

    setTimeout(function() {
        document.getElementById("animation").style.visibility = "hidden";
        animation.classList.remove('slide-up');
    let sky = document.getElementById('sky');
    let e = document.createElement('span');
    e.id = "newWishMessage";
    e.addEventListener('click', () => openWish());
    e.innerHTML = '<span class="sendingStar material-symbols-outlined">kid_star</span>';
    sky.appendChild(e);
    setTimeout(function() {
        sky.removeChild(e);
        animation.src = 'animation1.png'
        document.getElementById("animation").style.visibility = "visible";
        animation.classList.add('slide-up');
        messageButton.classList.add('slide-up');
    }, 3000);
    }, 4000);
}

async function keepBtnFunction(){
    const message = document.getElementById('message');
    const receivedMessage = document.getElementById('receivedMessage');
    document.getElementById("receivedMessage").style.visibility = "hidden";
    message.value = '';
    returnBtn.classList.remove('slide-up');
    keepBtn.classList.remove('slide-up');
    let animation = document.getElementById('animation');
    const messageButton = document.getElementById('messageButton');
    document.getElementById("messageButton").style.visibility = "hidden";
    messageButton.classList.remove('slide-up');
    document.getElementById('message').value = '';
    animation.classList.add('slide-up');
    setTimeout(function(){
        animation.src = 'animation1.png'
        setTimeout(function(){
            animation.src = 'animation2.png'
            setTimeout(function(){
                animation.src = 'animation3.png'
                setTimeout(function(){
                    animation.src = 'animation4.png'
                    setTimeout(function(){
                        animation.src = 'animation5.png'
                        setTimeout(function(){
                            animation.src = 'animation6.png'
                            setTimeout(function(){
                                animation.src = 'animation7.png'
                                setTimeout(function(){
                                    animation.src = 'animation8.png'
                                    setTimeout(function(){
                                        animation.src = 'animation9.png'
                                        setTimeout(function(){
                                            animation.src = 'animation10.png'
                                            document.getElementById("messageButton").style.visibility = "visible";
                                        }, 500);
                                    }, 250);
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);

    let sky = document.getElementById('sky');
    let e = document.createElement('span');
    setTimeout(function() {
        document.getElementById("animation").style.visibility = "hidden";
        animation.classList.remove('slide-up');
    e.id = "newWishMessage";
    e.addEventListener('click', () => openWish());
    e.innerHTML = '<span class="sendingStar material-symbols-outlined">kid_star</span>';
    sky.appendChild(e);
    setTimeout(function() {
        sky.removeChild(e);
        animation.src = 'animation1.png'
        document.getElementById("animation").style.visibility = "visible";
        animation.classList.add('slide-up');
        messageButton.classList.add('slide-up');
        setTimeout(function(){
            e = document.createElement('span');
            e.id = "newWishMessage"
            e.addEventListener('click', () => openWish());
            e.innerHTML = '<span class="droppingStar material-symbols-outlined";>kid_star</span>';
        
            sky.appendChild(e);
        
            setTimeout(function(){
                sky.removeChild(e);
                jar.src = "jar.png";
                const newImage = document.getElementById('new-image');
        const jarhoverArea = document.getElementById('jar-hover-area');
        const x = document.getElementById('x');
        const message = document.getElementById('message');
        const messageButton = document.getElementById('messageButton');
        newImage.classList.add('slide-up');
        jar.classList.add('slide-up');
        message.classList.add('slide-up');
        x.classList.add('slide-up');
        messageButton.classList.add('slide-up');
            },3000)
        },4000)
    }, 3000);
    }, 4000);

    const jar = document.getElementById("jar");
    jar.src = "openJar.png";

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

function sendMessage(){

    const message = document.getElementById('message');
    message.value = '';
    let animation = document.getElementById('animation');
    const messageButton = document.getElementById('messageButton');
    document.getElementById("messageButton").style.visibility = "hidden";
    messageButton.classList.remove('slide-up');
    document.getElementById('message').value = '';
    animation.classList.add('slide-up');
    setTimeout(function(){
        animation.src = 'animation1.png'
        setTimeout(function(){
            animation.src = 'animation2.png'
            setTimeout(function(){
                animation.src = 'animation3.png'
                setTimeout(function(){
                    animation.src = 'animation4.png'
                    setTimeout(function(){
                        animation.src = 'animation5.png'
                        setTimeout(function(){
                            animation.src = 'animation6.png'
                            setTimeout(function(){
                                animation.src = 'animation7.png'
                                setTimeout(function(){
                                    animation.src = 'animation8.png'
                                    setTimeout(function(){
                                        animation.src = 'animation9.png'
                                        setTimeout(function(){
                                            animation.src = 'animation10.png'
                                            document.getElementById("messageButton").style.visibility = "visible";
                                        }, 500);
                                    }, 250);
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);

    setTimeout(function() {
        document.getElementById("animation").style.visibility = "hidden";
        animation.classList.remove('slide-up');
    let sky = document.getElementById('sky');
    let e = document.createElement('span');
    e.id = "newWishMessage";
    e.addEventListener('click', () => openWish());
    e.innerHTML = '<span class="sendingStar material-symbols-outlined">kid_star</span>';
    sky.appendChild(e);
    setTimeout(function() {
        sky.removeChild(e);
        animation.src = 'animation1.png'
        document.getElementById("animation").style.visibility = "visible";
        animation.classList.add('slide-up');
        messageButton.classList.add('slide-up');
    }, 3000);

    const pingElement = document.getElementById('ping');
    const newImage = document.getElementById('new-image');
    pingElement.classList.add('visible');
    pingElement.innerText = "Your message is being send out to the stars.";
    newImage.src = 'tableGlow.png';
  
    setTimeout(() => {
      pingElement.classList.remove('visible');
      newImage.src = 'table.png';
    }, 3000);
    }, 4000);
    
}