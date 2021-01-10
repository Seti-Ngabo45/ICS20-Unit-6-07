document.getElementById('answer').addEventListener('click', multiply)

function multiply () {
  let counter = document.getElementById('counter').value
  let num = document.getElementById('num').value
  num = parseInt(num)
  let answer = 0
  while (counter > 0) {
    counter--
    answer = answer + num
  }
  alert(answer)
}