// Calculate the amount based on quantity and rate
function calculateAmount() {
  const quantity = document.getElementById("quantity").value;
  const rate = document.getElementById("rate").value;
  const amount = quantity * rate || 0;

  document.getElementById("amount").value = amount.toFixed(2);
}

// Add event listeners to quantity and rate fields
document.getElementById("quantity").addEventListener("input", calculateAmount);
document.getElementById("rate").addEventListener("input", calculateAmount);


