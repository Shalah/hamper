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

brand.addEventListener('change', function (event) {
  console.log(event.target.value);
});

console.log('Test');
