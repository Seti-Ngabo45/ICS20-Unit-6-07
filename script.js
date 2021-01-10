document.getElementById('answer').addEventListener('click',multiply)

function multiply() {
  let counter = document.getElementById('counter').value;
  let number = document.getElementById('x').value;
  x = parseInt(x);
  let answer = 0;
  while (counter > 0) {
    counter--   
    answer = answer + x
  }
  alert(answer);
}
    