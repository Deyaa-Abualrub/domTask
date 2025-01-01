// q1

let images = [
  "imges/download.webp",
  "imges/download.webp",
  "imges/download.webp",
  "imges/download.webp",
  "imges/download.webp",
];

let listItems = document.querySelectorAll("#fruit-list li");

listItems.forEach((li, index) => {
  let img = document.createElement("img");
  img.src = images[index];
  li.appendChild(img);
});

// q2 

let num = prompt("Enetr Number");
let arr = [1, 2, 12];

function equal(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) 
        return num;
  }
  return -1;
}

console.log(equal(arr, num));
