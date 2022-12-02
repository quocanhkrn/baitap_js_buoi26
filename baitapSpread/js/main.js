let element = document.querySelector(".heading");
let text = element.innerHTML;
let letters = text.split("");
console.log(letters);
element.innerHTML = "";
letters.forEach((letter) => {
  element.innerHTML += `<span>${letter}</span>`;
});
