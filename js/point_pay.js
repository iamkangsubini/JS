const have_num = document.querySelector('#have_num')
const use_num = document.querySelector('#use_num')
const x_btn = document.querySelector('#x_btn')
const all_btn = document.querySelector('#all_btn')
console.log(have_num, use_num, x_btn, all_btn)
all_btn.addEventListener('click',function(){
    let money = 1000
    let money_z = 0
    have_num.innerHTML = money_z
    use_num.innerHTML = money
    if(money >= 1){
        x_btn.style.display = 'inline-block'
    }else {
        x_btn.style.display = 'none'
    }
    if(money_z <= 1000){
        window.alert = '1000원 이상 사용가능합니다.'
    }
});
x_btn.addEventListener('click',function(){
    let money = 1000
    let money_z = 0
    use_num.innerHTML = money_z
    x_btn.style.dispaly = 'none'
    have_num.innerHTML = money
}); 