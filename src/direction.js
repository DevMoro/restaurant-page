export function directions() {

    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = "How to find us!"

    const img = document.createElement('IMG');
    img.src = "map.jpg";
    img.height = "500";
    img.width = "500";

    const p = document.createElement('p');
    p.textContent = "suscipit iaculis est sed condimentum. Nullam eu justo nulla. Duis mollis metus eu sem condimentum venenatis at sit amet lPellentesqueorem. Donec lacinia, lorem suscipit porttitor scelerisque, magna ex posuere neque, sed rhoncus eros dui id magna. Fusce convallis ligula ut purus tincidunt, quis vestibulum turpis ultrices. Nullam a cursus quam, et eleifend ante. Sed et lacinia metus. Pellentesque nisl nisl, dapibus consectetur justo at, pharetra faucibus dolor. Aliquam finibus nisi vel arcu lacinia, at tincidunt lectus ultrices. Mauris egestas quam in est placerat faucibus";

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);

    

}