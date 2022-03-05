const signupForm = async function(event) {
  event.preventDefault();

  const nameEl = document.getElementById('nameInputSignup');
  const emailEl = document.getElementById('emailInputSignup');
  const passwordEl = document.getElementById('passwordInputSignup');

  const response = await fetch('/api/user', {
    
    // This is for the login session to ge the user data when they sign up
    method: 'POST',
    body: JSON.stringify({
      name: nameEl.value,
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

