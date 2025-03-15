// Goal amount for the Lotus Esprit (can be adjusted)
const goalAmount = 100000; // Example: $100,000 goal for the car

// Get the payment amount from local storage, default to 0
let storedPayment = parseFloat(localStorage.getItem('paidAmount')) || 0;

// Get references to DOM elements
const lotusEsprit = document.getElementById('lotusEsprit');
const paidPortion = document.getElementById('paidPortion');

// Initialize UI with the stored amount
updateUI();

// Update the payment amount based on user input
function updatePayment() {
  const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);
  if (!isNaN(paymentAmount) && paymentAmount > 0) {
    storedPayment += paymentAmount; // Add the new payment to the stored amount
    localStorage.setItem('paidAmount', storedPayment); // Save to localStorage
    updateUI(); // Update the UI with the new payment
    document.getElementById('paymentAmount').value = ''; // Clear the input field
  } else {
    alert('Please enter a valid payment amount.');
  }
}

// Reset the payment to 0
function resetPayment() {
  storedPayment = 0; // Reset the stored amount to 0
  localStorage.setItem('paidAmount', storedPayment); // Save the reset amount
  updateUI(); // Update the UI with the reset value
}

// Update the UI elements based on the current payment
function updateUI() {
  // Calculate the percentage of the goal achieved
  const paymentPercentage = Math.min(storedPayment / goalAmount, 1) * 100;

  // Update the width of the paid portion
  paidPortion.style.width = `${paymentPercentage}%`; // Set the width of the paid portion

  // Update the text displaying the amount paid
  document.getElementById('amountPaidText').innerText = `Amount Paid: $${storedPayment.toFixed(2)}`;
}
