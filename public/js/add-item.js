const addBtn = document.getElementById('addBtn');

// function addCard() {
//   let type = document.getElementById('item_type').value;
//   let tone = document.getElementById('item_tone').value;
//   let material = document.getElementById('item_material').value;
//   let brand = document.getElementById('item_brand').value;
//   let size = document.getElementById('item_size').value;

//   console.log(type, tone, material, brand, size);
// }


//document.querySelector('#addBtn').addEventListener('submit', addCard);




const addCard = async function(event) {
  // prevents the page for reloading everytime
  console.log("Checking button L22")
  event.preventDefault();

  let typeEl = document.getElementById('item_type');
  let toneEl = document.getElementById('item_tone');
  let materialEl = document.getElementById('item_material');
  let brandEl = document.getElementById('item_brand');
  let sizeEl = document.getElementById('item_size');
  

  // This is to get the user data and send it to the database
  const response = await fetch('/api/item/add-item', {
    method: 'POST',
    body: JSON.stringify({
      item_type: typeEl.value,
      item_tone: toneEl.value,
      item_material: materialEl.value,
      item_brand: brandEl.value,
      item_size: sizeEl.value,
      
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log(response, 'L 46')
    
    alert(' Data sent'); // To be deleted
    console.log('success')
  } else {
    alert('Failed to send data!!');
    console.log('failed')

  }
};

addBtn.addEventListener('click', addCard);



















