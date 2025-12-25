const h2=document.querySelector(".para")
const btn=document.querySelector("button");
const api="https://v2.jokeapi.dev/joke/Any?type=single";
const getjokes = async () => {
    let data = await fetch(api);
    let abcd = await data.json();
    h2.innerText = abcd["joke"];
};
btn.addEventListener("click" , getjokes);
