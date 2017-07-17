// Variables declared for calculator
const clear = document.getElementById('clear')
const operator = document.querySelectorAll('button.operator')
const resultsBox = document.querySelector('.results-box')
const results = document.querySelector('.results')
const number = document.querySelectorAll('button.number')
const equals = document.querySelector('#equals')


// Click Effects for Clear and Equals Buttons
clear.addEventListener("mousedown", function() {
  clear.className = "btn-click"
})

equals.addEventListener("mousedown", function() {
  equals.className = "btn-click"
})

clear.addEventListener("mouseup", function() {
  clear.className = ""
})

equals.addEventListener("mouseup", function() {
  equals.className = ""
})

// Logic

// set variables for first and second numbers
let numOne = 0
let numTwo = 0

number.forEach(number => {
  number.addEventListener("click", numberEvent => {
    let numberValue = numberEvent.target.value
    results.textContent += numberValue
  })
})

operator.forEach(operator => {
  operator.addEventListener("click", operatorEvent => {
    let operatorValue = operatorEvent.target.value
    results.textContent += operatorValue
  })
})

clear.forEach(clear => {
  clear.addEventListener("click", clearEvent =>  {
    results.textContent = ""
  })
})

equals.addEventListener("click", answerEvent => {
  if (operation.value === "+") {
    results.textContent = numOne + numTwo
  } else if (operation.value === '-') {
    results.textContent = numOne - numTwo
  } else if (operation.value === '/') {
    results.textContent = numOne / numTwo
  } else if (operation.value === '*') {
    results.textContent = numOne * numTwo
  }
})

numOne = ''
numTwo = ''
operator = ''
