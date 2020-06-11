export function pageLoad () {

const content = document.getElementById('content');
const pageContent = document.createElement('div');
pageContent.className = "contents";
const headline = document.createElement('h1');
headline.textContent = "Tacos de Lengua!"
const img = document.createElement('IMG')
img.src = "tacos.jpg"
img.height = "500"
img.width = "500"
const p = document.createElement('p');
p.textContent = "Pellentesque suscipit iaculis est sed condimentum. Nullam eu justo nulla. Duis mollis metus eu sem condimentum venenatis at sit amet lorem. Donec lacinia, lorem suscipit porttitor scelerisque, magna ex posuere neque, sed rhoncus eros dui id magna. Fusce convallis ligula ut purus tincidunt, quis vestibulum turpis ultrices. Nullam a cursus quam, et eleifend ante. Sed et lacinia metus. Pellentesque nisl nisl, dapibus consectetur justo at, pharetra faucibus dolor. Aliquam finibus nisi vel arcu lacinia, at tincidunt lectus ultrices. Mauris egestas quam in est placerat faucibus."

content.appendChild(pageContent);
pageContent.appendChild(headline);
pageContent.appendChild(img);
pageContent.appendChild(p);




}

