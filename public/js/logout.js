const logout = async function() {

  // This is for the login session that get user data

  const response = await fetch('/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert('Loged out'); // To be deleted
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
