function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteChar() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  let display = document.getElementById('display').value;
  try {
      let result = eval(display);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
