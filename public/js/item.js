let type = document.getElementById('type');
let color = document.getElementById('color');
let material = document.getElementById('material');
let brand = document.getElementById('brand');

type.addEventListener('change', function (event) {
  event.target = type.value;
  console.log(type.value);
});

color.addEventListener('change', function (event) {
  event.target = color.value;
  console.log(color.value);
});

material.addEventListener('change', function (event) {
  event.target = material.value;
  console.log(material.value);
});

// brand.addEventListener('keypress', function (event) {
//   event.target = brand.;
//   console.log(brand.);
// });

console.log('Test');
