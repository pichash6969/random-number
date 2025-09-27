// Function for 2 digit (00 - 99)
function generateTwoDigit() {
  let num = Math.floor(Math.random() * 100); // 0 - 99
  let formatted = num.toString().padStart(2, '0'); // always 2 digits
  document.getElementById('twoDigit').innerText = formatted;
}

// Function for 3 digit (000 - 999)
function generateThreeDigit() {
  let num = Math.floor(Math.random() * 1000); // 0 - 999
  let formatted = num.toString().padStart(3, '0'); // always 3 digits
  document.getElementById('threeDigit').innerText = formatted;
}
