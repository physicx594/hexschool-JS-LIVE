let mingMoney = document.querySelector('#mingMoney')
let addMoney = document.querySelector('#addMoney')
let reduceMoney = document.querySelector('#reduceMoney')
let input = document.querySelector('#input')
let mingHaveMoney = 1000
mingMoney.textContent = mingHaveMoney

addMoney.addEventListener('click', calculation)
reduceMoney.addEventListener('click', calculation)


function calculation(e){
    let str=''
    switch(e.target){
        case addMoney:
            str = Number(mingMoney.textContent) + Number(input.value)
            mingMoney.innerHTML = str
            input.value=''
            break;
        case reduceMoney:
            str = Number(mingMoney.textContent) - Number(input.value)
            mingMoney.innerHTML = str
            input.value=''
            break;
    }
}
var dog = '狗'
let casper = "卡斯"
const apple = '蘋果'
{
    let casper = "卡"
    const apple = '果'
    var dog = '貓'


}
//  apple = '蘋'

console.log(apple);
console.log(casper);
console.log(dog);
