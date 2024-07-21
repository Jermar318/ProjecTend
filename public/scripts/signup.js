document.addEventListener('DOMContentLoaded', (event) => {
  const signupFormHandler = async (event) => {
      event.preventDefault();

      // Retrieve user input from signup form
      const username = document.querySelector('username').value.trim();
      const password = document.querySelector('password').value.trim();
      const email = document.querySelector('email').value.trim();

      // Ensure all fields are provided
      if (name && email && password) {
          try {
              // Send a POST request to the signup route
              const response = await fetch('/api/users/signup', {
                  method: 'POST',
                  body: JSON.stringify({ name, email, password }),
                  headers: { 'Content-Type': 'application/json' },
              });

              // Check if the signup was successful
              if (response.ok) {
                  // Redirect user to the homepage or login page upon successful signup
                  document.location.replace('/login');
              } else {
                  // If signup fails, alert the user
                  alert('Failed to sign up');
              }
          } catch (error) {
              // Log any error to the console and alert the user
              console.error('Error during signup:', error);
              alert('Failed to sign up');
          }
      } else {
          // Alert the user if any field is missing
          alert('Please enter your name, email, and password to sign up');
      }
  };

  // Attach the event listener to the signup form
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
});