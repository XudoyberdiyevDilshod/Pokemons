var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elList = document.querySelector(".js-list");

function renderList(arr, element) {
  element.innerHTML = "";
  arr.forEach((item) => {
    var elItem = document.createElement("li");
    var elId = document.createElement("p");
    var elImg = document.createElement("img");
    var elName = document.createElement("p");
    var elType = document.createElement("p");
    var elHeight = document.createElement("p");
    var elWeight = document.createElement("p");

    elItem.setAttribute("class", "col-12 col-md-4 col-lg-3 rounded shadow p-3");
    elId.textContent = item.id;
    elImg.setAttribute("src", item.img);
    elName.textContent = item.name;
    elType.textContent = item.type;

    elHeight.textContent = `height: ${item.height}`;
    elWeight.textContent = `weight: ${item.weight}`;

    elList.appendChild(elItem);
    elItem.appendChild(elId);
    elItem.appendChild(elName);
    elItem.appendChild(elImg);
    elItem.appendChild(elType);
    elItem.appendChild(elHeight);
    elItem.appendChild(elWeight);
  });
}

renderList(pokemons, elList);

let newArr = [];
elSelect.addEventListener("change", function () {
  newArr = [];

  if (elSelect.value != "All") {
    pokemons.forEach((poc) => {
      if (poc.type.includes(elSelect.value)) {
        newArr.push(poc);
      }
    });
    renderList(newArr, elList);
  } else {
    renderList(pokemons, elList);
  }
});

var newSet = new Set();

pokemons.forEach((item) => {
  item.type.forEach((type) => {
    newSet.add(type);
  });
});

newSet.forEach((type) => {
  var newOption = document.createElement("option");
  newOption.value = type;
  newOption.textContent = type;
  elSelect.appendChild(newOption);
});
