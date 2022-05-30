// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
let UlList = document.createElement("ul");
countries.forEach(function (element) {
  let LiList = UlList.appendChild(document.createElement("li"));
  LiList.innerHTML = element;
});

console.log(UlList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementClass = document.querySelector(".fn-remove-me");
let removeClass = elementClass.remove();
console.log(elementClass);
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const newUlsList = document.createElement("ul");
cars.forEach(function (carsElement) {
  const newLiList = newUlsList.appendChild(document.createElement("li"));
  newLiList.innerHTML = carsElement;
});
console.log(newUlsList);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const arrayCountries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const newDivList = document.createElement("div");
for (let iterator of arrayCountries) {
  let newH4List = newDivList.appendChild(document.createElement("h4"));
  newH4List.innerHTML = iterator.title;
  let imgUrl = newH4List.appendChild(document.createElement("img"));
  imgUrl.src = iterator.imgUrl;
}
console.log(newDivList);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
const removeButton = document.createElement("Button");

arrayCountries.forEach(function (element) {
  removeButton.newH4List.remove();
});

console.log(removeButton);
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
arrayCountries.forEach((element) => {
  const newremoveButton = document.createElement("Button"[element]);
});
console.log(newremoveButton);
