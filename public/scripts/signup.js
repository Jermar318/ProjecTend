document.addEventListener('DOMContentLoaded', (event) => {
    const signupFormHandler = async (event) => {
      event.preventDefault();
  
      // Get the values from the form
      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();
      const email = document.querySelector('#email').value.trim();
  
      // Check if all fields have values
      if (username && password && email) {
        const response = await fetch('/public/scripts/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password, email }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        // Check the response from the server
        if (response.ok) {
          // redirect to the login page
          document.location.replace('/login');
        } else {
          // display an alert if the sign up failed
          alert('Failed to sign up. Please try again.', console.log(response.statusText));
        }
      } else {
        // If not all fields have values, alert the user
        alert('Please fill in all fields.');
      }
    };
  
    document
      .querySelector('.form-container form')
      .addEventListener('submit', signupFormHandler);
  });