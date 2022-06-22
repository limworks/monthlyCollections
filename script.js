'use strict';

const monthlyGoal = document.querySelector('#monthlyGoal');
const monthlyCurrent = document.querySelector('#monthlyCurrent');

const resetBtn = document.querySelector('#resetBtn');
const calculateBtn = document.querySelector('#calculateBtn');

let summaryAmount = document.querySelector('#summaryAmount');
let summaryOne = document.querySelector('#summaryOne');
let summaryTwo = document.querySelector('#summaryTwo');


calculateBtn.addEventListener('click', () => {

    const goalValue = parseInt(monthlyGoal.value);
    const currentValue = parseInt(monthlyCurrent.value);
    const seventy = goalValue*0.7;
    const eighty = goalValue*0.8;

    const currentPercentage = (currentValue*100)/goalValue;

    if(goalValue && currentValue){
        summaryAmount.innerHTML = currentPercentage.toFixed(2)+'%';
        summaryOne.innerHTML = Math.ceil(seventy-currentValue) > 0 ? Math.ceil(seventy-currentValue)+'€' : 0+'€';
        summaryTwo.innerHTML = Math.ceil(eighty-currentValue) > 0 ? Math.ceil(eighty-currentValue)+'€' : 0+'€';
    }
    else{
        alert('Įvesk mėnesio planą ir esamą surinkimą. Galimi tik skaičiai');
    }

})

resetBtn.addEventListener('click', () => {
    summaryAmount.innerHTML = 0;
    summaryOne.innerHTML = 0;
    summaryTwo.innerHTML = 0;
    monthlyGoal = '';
    monthlyCurrent = '';
})