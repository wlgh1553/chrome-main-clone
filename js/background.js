const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url(img/${chosenImage})`;
