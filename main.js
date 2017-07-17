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
let operatorValue

// answer = numOne operator numTwo

// Add the value of the number clicked to the results
number.forEach(number => {
  number.addEventListener("click", numberEvent => {
    let numberValue = numberEvent.target.value
    results.textContent += numberValue
    if (operatorValue) {
      numTwo += numberValue
    } else {
      numOne += numberValue
    }
    // need to store values for numOne and numTwo
    // Value for numOne should be equal to the numbers clicked before the operator
    // Value for numTwo should be the numbers clicked after the operator and before the equals

      // if (number is before operator) {
      //  numOne += that number's value
      // } else if (number is after operator && number is before equals) {
      //  numTwo += that number's value
      // }
  })
})

// Add the value of the operator clicked to the results
operator.forEach(operator => {
  operator.addEventListener("click", operatorEvent => {
    operatorValue = operatorEvent.target.value
    results.textContent += operatorValue
  })
})

// Remove all of the information from results when "c" is clicked
// Not working for some reason (clearBtn.forEach is not a function)
clearBtn.addEventListener("click", clearEvent =>  {
  numOne = ""
  numTwo = ""
  results.textContent
  // if clear button is hit, everything is reset to zero
  // if new equation is created after equals is returned, reset to zero
})

// Make the answer show up in the results when "=" is clicked
equals.addEventListener("click", answerEvent => {
  console.log({ numOne, numTwo });
  if (operatorValue === "+") {
    results.textContent = numOne + numTwo
  } else if (operatorValue === '-') {
    results.textContent = numOne - numTwo
  } else if (operatorValue === '/') {
    results.textContent = numOne / numTwo
  } else if (operatorValue === '*') {
    results.textContent = numOne * numTwo
  }
  // Could I technically say results.textContent = `${numOne} ${operator} ${numTwo}`
})
