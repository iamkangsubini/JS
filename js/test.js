const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const btn = document.querySelector('#sum_btn');
const result = document.querySelector('#result');
console.log(userHeight, userWeight, btn, result);
btn.addEventListener('click',function(){
    let userH = Number(userHeight.value)
    let userW = Number(userWeight.value)
    console.log(userH, userW)
    let normal_W = (userH-100)*0.9
    console.log(normal_W)
    let goal_W = userW - normal_W
    console.log(goal_W)
    result.value = '적정체중은 ' + normal_W + 'kg이며 ' + goal_W +'kg 초과되셨습니다.'
});