
let para = document.querySelector('p');
let btn = document.querySelector('button');
async function loadJoke(){
    let res = await fetch('https://api.chucknorris.io/jokes/random');
    let joke = await res.json();
    para.innerHTML = joke.value;
}
btn.addEventListener('click', loadJoke);