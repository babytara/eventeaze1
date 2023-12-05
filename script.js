document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulating payment processing (replace with actual payment logic)
  setTimeout(function() {
    document.getElementById('paymentStatus').innerText = 'Payment successful!';
  }, 2000); // Simulating a 2-second payment process
});
