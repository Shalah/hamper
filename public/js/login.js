const loginForm = async function(event) {
  // prevents the page for reloading everytime
  event.preventDefault();

  const emailEl = document.querySelector('#email-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  // This is for the login session that get user data
  const response = await fetch('/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert(' Success login in'); // To be deleted
    console.log('success')
  } else {
    alert('Failed to login!!');
    console.log('failed')

  }
};

document.querySelector('#login-form').addEventListener('submit', loginForm);
