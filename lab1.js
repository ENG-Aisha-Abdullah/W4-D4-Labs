let h1 = document.getElementsByClassName("welcome")[0]
h1.innerText = "hello world"
h1.style.color = "red"
h1.style.background = "yellow"
console.log(h1);

let p = document.getElementById("p1");
p.style.fontWeight = "bold";
p.style.color = "white"
p.style.background = "gray"

let img = document.getElementsByTagName("img")[0]
img.src = "./logo-h.png";


let items = document.querySelectorAll('.list');
let texts = ["first", "second", "third"];
for (let i = 0; i < items.length; i++) {
  items[i].innerText = texts[i];
}