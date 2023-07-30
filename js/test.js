const userHeght = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const sum_btn = document.querySelector('#sum_btn');
const normal_w = document.querySelector('#result');
console.log(userHeght, userWeight, sum_btn, normal_w);
//결과보기 -> sum_btn클릭시 normal_w에 '적정체중은 ?kg이며 ?kg초과되셨습니다.'
sum_btn.addEventListener('click',function(){
    normal_w.value = `적정체중은 ${userWeight}-100*0.9kg 입니다.`
});