document.addEventListener('DOMContentLoaded', (event) => {
  const loginFormHandler = async (event) => {
      event.preventDefault();

      // Retrieve user input
      const email = document.querySelector('email').value.trim();
      const password = document.querySelector('password').value.trim();

      // Ensure both email and password are provided
      if (email && password) {
          try {
              // Send a POST request to the login route
              const response = await fetch('/api/users/login', {
                  method: 'POST',
                  body: JSON.stringify({ email, password }),
                  headers: { 'Content-Type': 'application/json' },
              });

              // Check if the login was successful
              if (response.ok) {
                  // Redirect user to the homepage upon successful login
                  document.location.replace('/');
              } else {
                  // If login fails, alert the user
                  alert('Failed to log in');
              }
          } catch (error) {
              // Log any error to the console and alert the user
              console.error('Error during login:', error);
              alert('Failed to log in');
          }
      } else {
          // Alert the user if email or password is missing
          alert('Please enter both email and password');
      }
  };

  // Attach the event listener to the login form
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
});