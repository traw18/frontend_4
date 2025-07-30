const button = document.querySelector("#btn-1");
const heading = document.querySelector("h1");

button.addEventListener("click",() => {
    console.log(123);
    document.body.classList.toggle("dark");
    heading.classList.toggle("yellow");
});