
const fileEx = "jpg"

const images = [`0.${fileEx}`, `1.${fileEx}`, `2.${fileEx}`, `3.${fileEx}`];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${chosenImage})  no-repeat center`;


// const bgImage = document.createElement("img");


// bgImage.src = `img/${chosenImage}`;

// document.body.prepend(bgImage);
