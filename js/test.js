let userHeight = document.getElementById('height').value;
let userWeight = document.getElementById('weight').value;
const sum_btn = document.getElementById('sum_btn');
let result = document.getElementById('result');
console.log(userHeight, userWeight, sum_btn, result);
//결과보기 -> sum_btn클릭시 result에 '적정체중은 ?kg이며 ?kg초과되셨습니다.'
let normal_w = (userHeight-100)*0.9;
sum_btn.addEventListener('click',function(){
    result.value = `적정체중은 ${normal_w}kg이며 ${userWeight-normal_w}kg 초과셨습니다.`
});