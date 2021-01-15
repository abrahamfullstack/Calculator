

window.onload = function test (){

    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculator__keys')
    
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            
            if (action) {
                if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                    console.log('Operation')
                }else if (action === 'clear') {
                    console.log('Clear')
                }else if (action === '.') {
                    console.log('Decimal')
                }else {
                    console.log('Calculate')
                }
            }
        }
    })
}