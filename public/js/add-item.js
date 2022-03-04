async function newFormHandler(event) {
    event.preventDefault();
  
    const item_name = document.querySelector('#item_name').value;
    const item_color = document.querySelector('#item_color').value;
    const item_size = document.querySelector('#item_size').value;
    const item_fabric = document.querySelector('#item_fabric').value;
    const is_leather = document.querySelector('#is_leather:checked') ? true : false;
    const is_linen = document.querySelector('#is_leather:checked') ? true : false;
  
    const response = await fetch(`/api/item`, {
      method: 'POST',
      body: JSON.stringify({
        item_name,
        item_color,
        item_fabric,
        is_leather,
        is_linen,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add item');
    }
  }
  
  document
    .querySelector('.new-item-form')
    .addEventListener('submit', newFormHandler);
  