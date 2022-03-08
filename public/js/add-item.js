const addBtn = document.getElementById('addBtn');

function newFormHandler(event) {
  console.log( 'L 4')
  event.preventDefault();

  const item_type = document.querySelector('#item_type').value;
  const item_tone = document.querySelector('#item_tone').value;
  const item_size = document.querySelector('#item_size').value;
  const is_cotton = document.querySelector('#is_cotton:checked') ? true : false;
  const is_leather = document.querySelector('#is_leather:checked') ? true : false;
  const is_linen = document.querySelector('#is_linen:checked') ? true : false;
  const item_brand = document.querySelector('#item_brand').value;

  //How to put item_brand value into a variable??
  const response = fetch(`./api/itemRoutes.js`, {
    method: 'POST',
    body: JSON.stringify({
      item_type,
      item_tone,
      item_size,
      item_brand,
      is_cotton,
      is_leather,
      is_linen,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/homepage');
  } else {
    alert('Failed to add item');
  }
}

<<<<<<< HEAD
addBtn.addEventListener('click', newFormHandler);

//function addCard() {}


=======
addBtn.addEventListener('click', addCard);

function addCard() {
  let type = document.getElementById('item_type').value;
  let tone = document.getElementById('item_tone').value;
  let material = document.getElementById('item_material').value;
  let brand = document.getElementById('item_brand').value;
  let size = document.getElementById('item_size').value;

  console.log(type, tone, material, brand, size);
}
>>>>>>> main
