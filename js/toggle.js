const button = document.querySelector("#btn-1");
const heading = document.querySelector("h1");

button.addeventListener("click",() => {
    document.body.classList.toggle("dark");
    heading.classList.toggle("yellow");
});