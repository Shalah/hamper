async function editFormHandler(event) {
  event.preventDefault();
  const item_type = document.querySelector('#item_type').value;
  const item_size = document.querySelector('#item_size').value;
  const item_tone = document.querySelector('#item_color').value;
  const item_brand = document.querySelector('#item_brand').value;
  const is_cotton = document.querySelector('#is_cotton:checked') ? true : false;
  const is_leather = document.querySelector('#is_leather:checked') ? true : false;
  const is_linen = document.querySelector('#is_linen:checked') ? true : false;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/item/${id}`, {
    method: 'PUT',
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
    document.location.replace(`/item/${id}`);
  } else {
    alert('Failed to edit item, please try again later!');
  }
}

document.querySelector('.edit-item-form').addEventListener('submit', editFormHandler);
