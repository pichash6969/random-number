function generate() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById('number').innerText = "Invalid Range!";
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('number').innerText = randomNum;
}
