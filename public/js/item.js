let type = document.getElementById('item_type');
let tone = document.getElementById('item_tone');
let material = document.getElementById('item_material');
let brand = document.getElementById('item_brand');
let size = document.getElementById('item_size');

type.addEventListener('change', function (event) {
  event.target = type.value;
  console.log(type.value);
});

tone.addEventListener('change', function (event) {
  event.target = tone.value;
  console.log(tone.value);
});

material.addEventListener('change', function (event) {
  event.target = material.value;
  console.log(material.value);
});

size.addEventListener('change', function (event) {
  event.target = size.value;
  console.log(size.value);
});

brand.addEventListener('change', function (event) {
  console.log(event.target.value);
});

// Settings page
document.getElementById('settings').onclick = function () {
  location.href = '/settings';
};

console.log('Test');
