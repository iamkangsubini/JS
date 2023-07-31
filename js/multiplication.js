const dan2 = document.querySelector('#dan2');
const calc = document.querySelector('#calc');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn');
console.log(dan2, calc, result, btn);
//버튼을 누르면 결과값이 뜬다.
btn.addEventListener('click',function(){
    let first = Number(dan2.value)
    let last = Number(calc.value)
    console.log(first, last, first*last)
    result.value = first*last
});