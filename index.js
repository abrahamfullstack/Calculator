function Calculus(){
    let regx = /([+*-/])/
    
    const calcul = document.getElementById('numField').value
    
    const arr = calcul.split(regx)
    const syms = a => regx.test(a) ? a : ''
    const symbs = arr.reduce(syms)

    console.log(arr)
    console.log(symbs)

}