const body = document.querySelector(".body");

const p = document.createElement('p');
p.textContent = "Hey i'm red!"
p.style.color = "red";
body.appendChild(p);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3";
header.style.color = "blue";
body.appendChild(header);

const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink";

const subHeader = document.createElement("h1");
subHeader.textContent = "I'm in a div";
div.appendChild(subHeader);

const subParagraph = document.createElement("p");
subParagraph.textContent = "I am also in a div";
div.appendChild(subParagraph);

body.appendChild(div);