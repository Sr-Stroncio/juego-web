let contenidos = [];

export default function apiBici(url){
    fetch(url)
    .then(response => response.json())
    .then(data => contenidos.push(data));
}









