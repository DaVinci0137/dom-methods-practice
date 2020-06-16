const buttonElement = document.createElement('button');
document.body.appendChild(buttonElement);
buttonElement.append('Like Pirating?');

buttonElement.addEventListener("click", function () {
    console.log("click");
    mainElement.remove();
})

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

const image = document.createElement('img');
mainElement.append(image);
image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7dUdhOUY155FRqkGIy9mOgHaEo%26pid%3DApi&f=1';
const src = document.getElementById('main');

const link = document.createElement('a');
const linkText = document.createTextNode("my text link");
link.appendChild(linkText);
link.text = "Here's how";
link.href = "https://www.wikihow-fun.com/Act-Like-a-Pirate";
mainElement.appendChild(link);