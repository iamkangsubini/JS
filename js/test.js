let userHeight = document.querySelector('#height');
let userWeight = document.querySelector('#weight');
let sum_btn = document.querySelector('#sum_btn');
let result = document.querySelector('#result');
console.log(userHeight, userWeight, sum_btn, result);
//결과보기 -> sum_btn클릭시 result에 '적정체중은 ?kg이며 ?kg초과되셨습니다.'
let normal_w = (userHeight.value-100)*0.9;
console.log(normal_w);
sum_btn.addEventListener('click',function(){
    console.log(normal_w)
    console.log(userWeight.value-normal_w)
    console.log(typeof(userWeight.value))
    result.value = `적정체중은 ${normal_w}kg이며 ${userWeight.value-normal_w}kg 초과셨습니다.`
});