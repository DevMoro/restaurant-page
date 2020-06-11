

import {pageLoad} from './page.js';
import {tacos} from './tacos.js';
import {directions} from './direction.js';

const body = document.getElementById('main');

const content = document.getElementById('content');

const ul = document.createElement('ul');
ul.style.display = "inline-block";
ul.style.top = "0;"

const pageLoadTab = document.createElement('li');
pageLoadTab.textContent = "Home"
const tacosTab = document.createElement('li');
tacosTab.textContent = "Taco Menu!"
const directionsTab = document.createElement('li');
directionsTab.textContent = "Directions!"

const contents = document.getElementsByClassName('contents')
 
ul.appendChild(pageLoadTab);
ul.appendChild(tacosTab);
ul.appendChild(directionsTab);
body.appendChild(ul);

pageLoadTab.addEventListener('click', showPage);
tacosTab.addEventListener('click', showTacos);
directionsTab.addEventListener('click', showDirections);

function showPage() {
    content.textContent = ""
    pageLoad();
}

function showTacos() {
    content.textContent = ""

    tacos();
}

function showDirections() {
    content.textContent = ""

    directions();
}




