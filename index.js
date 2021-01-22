window.onload = function StarUp (){

    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculator__keys')
    const display = calculator.querySelector('.calculator__display')
    
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            //Use this constant to check custome attribute for last type of key pressed
            const previousKeyType = calculator.dataset.previousKeyType
            //set previous key type as operator
            calculator.dataset.previousKeyType = 'operator'

            //calculate function
            const calculate = (n1, operator, n2) => {
                let result = ''

                if (operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2) 
                }else if (operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2)
                }else if (operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2)
                }else if (operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2)
                }

                return result
            }

            //replace or add number to calculator display
            if (action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                }else {
                    display.textContent = displayedNum + keyContent
                }
            }

            // get the clicked button function
            if (action) {
                if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

                    //Custom attribute to get previous key typed
                    calculator.dataset.previousKeyType = 'operator'
                    //custom attribute to get first value entered
                    calculator.dataset.firstValue = displayedNum
                    //custom attribute to store the operation
                    calculator.dataset.operator = action

                }else if (action === 'clear') {
                    calculator.dataset.previousKeyType = 'clear'
                    display.textContent = '0'
                }else if (action === '.') {

                    //Make sure that user has not enter decimal point
                    if (displayedNum.includes('.')) {
                        display.textContent = displayedNum
                    }else if (previousKeyType === 'operator') {
                        display.textContent = '0.'
                    }

                    calculator.dataset.previousKeyType = 'decimal'

                }else if (action === 'number'){
                    calculator.dataset.previousKeyType = 'number'
                }else if (action === 'calculate') {
                    
                    const firstValue = calculator.dataset.firstValue
                    const operator = calculator.dataset.operator
                    const secondValue = displayedNum

                    //call function to calculate the result
                    display.textContent = calculate(firstValue, operator, secondValue)
                    console.log(calculate(firstValue, operator, secondValue))
                }
            }

            
        }
    })
}