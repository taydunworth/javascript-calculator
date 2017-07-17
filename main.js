// Variables declared for calculator
const clearBtn = document.getElementById('clear')
const operator = document.querySelectorAll('.operator')
const resultsBox = document.querySelector('.results-box')
const results = document.querySelector('.results')
const number = document.querySelectorAll('button.number')
const equals = document.querySelector('#equals')


// Click Effects for Clear and Equals Buttons
clearBtn.addEventListener("mousedown", function() {
  clearBtn.className = "btn-click"
})

equals.addEventListener("mousedown", function() {
  equals.className = "btn-click"
})

clearBtn.addEventListener("mouseup", function() {
  clearBtn.className = ""
})

equals.addEventListener("mouseup", function() {
  equals.className = ""
})

// Logic

// set variables for first and second numbers
let numOne = ""
let numTwo = ""

// answer = numOne operator numTwo

number.forEach(number => {
  number.addEventListener("click", numberEvent => {
    let numberValue = numberEvent.target.value
    results.textContent += numberValue
    // need to store values for numOne and numTwo
    // Value for numOne should be equal to the numbers clicked before the operator
    // Value for numTwo should be the numbers clicked after the operator and before the equals
  })
})

operator.forEach(operator => {
  operator.addEventListener("click", operatorEvent => {
    let operatorValue = operatorEvent.target.value
    results.textContent += operatorValue
  })
})

// Not working for some reason
clearBtn.forEach(clear => {
  clearBtn.addEventListener("click", clearEvent =>  {
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
  // Could I technically say results.textContent = `${numOne} ${operator} ${numTwo}`
})
