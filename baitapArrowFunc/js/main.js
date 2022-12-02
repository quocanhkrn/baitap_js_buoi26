let house = document.getElementById("house");

let colorOpt = document.querySelectorAll(".opt");
colorOpt.forEach((opt) => {
  opt.onclick = () => {
    colorOpt.forEach((opt) => {
      opt.classList.remove("active");
    });
    if (house.classList.value.indexOf(" ") > 0) {
      let classList = house.classList.value;
      house.classList = classList.slice(0, classList.indexOf(" "));
    }
    opt.classList.add("active");
    let color = opt.classList[1];
    house.classList.add(color);
  };
});
