function createProductHTML(category) {
  return `
        <li class="nav-item ${category.className}">${category.name}</li>
      `;
}

var categorys = [
  {
    name: "全部",
    className: "hover",
  },
  {
    name: "智能导盲杖",
    className: "",
  },
];

var productHTML = categorys.map(createProductHTML).join("");

document.getElementsByClassName("navbar")[0].innerHTML = productHTML;
