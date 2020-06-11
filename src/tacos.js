export function tacos(){
    const content = document.getElementById('content');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Check out our range of tacos!";
    
    const img1 = document.createElement('IMG');
    img1.src = "tripa.jpg";
    img1.height = "500";
    img1.width = "500";
    
    const p1 = document.createElement('p');
    p1.textContent = "suscipit iaculis est sed condimentum. Nullam eu justo nulla. Duis mollis metus eu sem condimentum venenatis at sit amet lPellentesqueorem. Donec lacinia, lorem suscipit porttitor scelerisque, magna ex posuere neque, sed rhoncus eros dui id magna. Fusce convallis ligula ut purus tincidunt, quis vestibulum turpis ultrices. Nullam a cursus quam, et eleifend ante. Sed et lacinia metus. Pellentesque nisl nisl, dapibus consectetur justo at, pharetra faucibus dolor. Aliquam finibus nisi vel arcu lacinia, at tincidunt lectus ultrices. Mauris egestas quam in est placerat faucibus";
    
    const p2 = document.createElement('p');
    p2.textContent = "suscipit iaculis est sed condimentum. Nullam eu justo nulla. Duis mollis metus eu sem condimentum venenatis at sit amet lPellentesqueorem. Donec lacinia, lorem suscipit porttitor scelerisque, magna ex posuere neque, sed rhoncus eros dui id magna. Fusce convallis ligula ut purus tincidunt, quis vestibulum turpis ultrices. Nullam a cursus quam, et eleifend ante. Sed et lacinia metus. Pellentesque nisl nisl, dapibus consectetur justo at, pharetra faucibus dolor. Aliquam finibus nisi vel arcu lacinia, at tincidunt lectus ultrices. Mauris egestas quam in est placerat faucibus";
    
    const p3 = document.createElement('p');
    p3.textContent = "suscipit iaculis est sed condimentum. Nullam eu justo nulla. Duis mollis metus eu sem condimentum venenatis at sit amet lPellentesqueorem. Donec lacinia, lorem suscipit porttitor scelerisque, magna ex posuere neque, sed rhoncus eros dui id magna. Fusce convallis ligula ut purus tincidunt, quis vestibulum turpis ultrices. Nullam a cursus quam, et eleifend ante. Sed et lacinia metus. Pellentesque nisl nisl, dapibus consectetur justo at, pharetra faucibus dolor. Aliquam finibus nisi vel arcu lacinia, at tincidunt lectus ultrices. Mauris egestas quam in est placerat faucibus";

    const pageContent = document.createElement('div');
    pageContent.className = "contents";
    
    content.appendChild(pageContent)
    pageContent.appendChild(h1);
    pageContent.appendChild(img1);
    pageContent.appendChild(p1);
    pageContent.appendChild(p2);
    pageContent.appendChild(p3);




}