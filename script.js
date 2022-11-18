'use strict';

const resetBtn = document.querySelector('#resetBtn');
const calculateBtn = document.querySelector('#calculateBtn');
const langBtns = document.querySelectorAll('.langBtn');
const textTitle =document.querySelector('#text-title');
const textGoal = document.querySelector('#text-goal');
const textAmount = document.querySelector('#text-amount');
const textCurrent1 = document.querySelector('#text-current1');
const textCurrent2 = document.querySelector('#text-current2');
const textTo1 = document.querySelector('#text-to1');
const textTo2 = document.querySelector('#text-to2');
const textTo3 = document.querySelector('#text-to3');

let monthlyGoal = document.querySelector('#monthlyGoal');
let monthlyCurrent = document.querySelector('#monthlyCurrent');
let summaryAmount = document.querySelector('#summaryAmount');
let summaryOne = document.querySelector('#summaryOne');
let summaryTwo = document.querySelector('#summaryTwo');
let summaryThree = document.querySelector('#summaryThree');
let defaultLang = 'lt';

const languages = {
    en: {
        title: 'Monthly collections calculator',
        plan: 'Goal of the current month',
        currentSum: 'Collected amount',
        reset: 'Reset',
        calculate: 'Calculate',
        amountNow1: 'You have collected',
        amountNow2: 'of the current goal',
        to: 'To',

    },
    lt: {
        title: 'Mėnesinio surinkimo skaičiuoklė',
        plan: 'Šio mėnesio planas',
        currentSum: 'Šiuo metu surinkta suma',
        reset: 'Išvalyti',
        calculate: 'Skaičiuoti',
        amountNow1: 'Šiuo metu yra surinkta',
        amountNow2: 'mėnesio plano',
        to: 'Iki',
    },
}

const changeLang = (e) => {
    if(e.target.innerHTML === "LT") {
        defaultLang = 'lt';
        textTitle.textContent = languages.lt.title;
        textGoal.textContent = languages.lt.plan;
        textAmount.textContent = languages.lt.currentSum;
        textCurrent1.textContent = languages.lt.amountNow1;
        textCurrent2.textContent = languages.lt.amountNow2;
        textTo1.textContent = `${languages.lt.to} 70%:`;
        textTo2.textContent = `${languages.lt.to} 75%:`;
        textTo3.textContent = `${languages.lt.to} 80%:`;
        resetBtn.textContent = languages.lt.reset;
        calculateBtn.textContent = languages.lt.calculate;
    }
    else {
        defaultLang = 'en';
        textTitle.textContent = languages.en.title;
        textGoal.textContent = languages.en.plan;
        textAmount.textContent = languages.en.currentSum;
        textCurrent1.textContent = languages.en.amountNow1;
        textCurrent2.textContent = languages.en.amountNow2;
        textTo1.textContent = `${languages.en.to} 70%:`;
        textTo2.textContent = `${languages.en.to} 75%:`;
        textTo3.textContent = `${languages.en.to} 80%:`;
        resetBtn.textContent = languages.en.reset;
        calculateBtn.textContent = languages.en.calculate;
    }
};

langBtns.forEach(btn => btn.addEventListener('click', changeLang));


calculateBtn.addEventListener('click', () => {

    const goalValue = parseInt(monthlyGoal.value);
    const currentValue = parseInt(monthlyCurrent.value);
    const seventy = goalValue*0.7;
    const seventyFive = goalValue*0.75;
    const eighty = goalValue*0.8;

    const currentPercentage = (currentValue*100)/goalValue;

    if(goalValue && currentValue){
        summaryAmount.textContent = currentPercentage > 100 ? '100%' : currentPercentage.toFixed(2)+'%';
        summaryOne.textContent = Math.ceil(seventy-currentValue) > 0 ? Math.ceil(seventy-currentValue)+'€' : 0+'€';
        summaryTwo.textContent = Math.ceil(seventyFive-currentValue) > 0 ? Math.ceil(seventyFive-currentValue)+'€' : 0+'€';
        summaryThree.textContent = Math.ceil(eighty-currentValue) > 0 ? Math.ceil(eighty-currentValue)+'€' : 0+'€';
    }
    else{
        alert(defaultLang === 'lt' ? 'Įvesk mėnesio planą ir esamą surinkimą. Galimi tik skaičiai' : 'Please enter only numerical values!');
    }

})

resetBtn.addEventListener('click', () => {
    summaryAmount.textContent = 0;
    summaryOne.textContent = 0;
    summaryTwo.textContent = 0;
    summaryThree.textContent = 0;
    monthlyGoal = '';
    monthlyCurrent = '';
})