let body = document.body
let list = document.createElement("ul")
let item = document.createElement("li")
body.appendChild(list)
list.appendChild(item)
// let arr = ["stN:sara", "age: 20", "url:https://images.pexels.com/photos/31896480/pexels-photo-31896480/free-photo-of-scenic-coastal-view-with-blue-ocean-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"]
let arr = { name: "sara", age: 25, url: "https://www.pexels.com/photo/scenic-coastal-view-with-blue-ocean-and-boats-31896480/" };

let img = document.createElement("img");
img.src = arr.url;
item.appendChild(img);
