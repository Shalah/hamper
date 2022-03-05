const signupForm = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#email-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/user', {
    
    // This is for the login session to ge the user data when they sign up
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign up');
  }
};

document.querySelector('#signup-form').addEventListener('submit', signupForm);

