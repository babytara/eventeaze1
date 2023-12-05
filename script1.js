function login() {
  // Perform authentication logic here
  // You can retrieve values from username and password fields using document.getElementById().value
  // Implement your authentication logic (e.g., comparing with hardcoded values or fetching from a database)
  // For example:
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Dummy authentication - replace this with actual authentication logic
  if (username === 'eventCoordinator' && password === 'eventPassword') {
    alert('Logged in as Event Coordinator');
    // Redirect to coordinator page or perform necessary actions
  } else if (username === 'student' && password === 'studentPassword') {
    alert('Logged in as Student');
    // Redirect to student page or perform necessary actions
  } else {
    alert('Invalid username or password');
  }
}
