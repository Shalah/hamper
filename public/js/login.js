const loginForm = async function(event) {
  // prevents the page for reloading everytime
  event.preventDefault();

  const emailEl = document.querySelector('#email-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  // This is for the login session that get user data
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //window.location.replace('/');
    //alert(' Success login in'); // To be deleted
    window.location = "http://localhost:3001/homepage"; // using this to make the redirect work
    console.log('success')
  } else {
    //alert('Failed to login!!');
    console.log('failed')

  }
};

document.querySelector('#login-form').addEventListener('submit', loginForm);
