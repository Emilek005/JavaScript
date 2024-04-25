const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(`.conv`);
const resetBtn = document.querySelector(`.reset`);
const changeBtn = document.querySelector(`.change`);
const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);

const swap = function () {
       if (one.textContent === '℃') {
           one.textContent = '℉';
           two.textContent = '℃';
           result.textContent = '';
    }  else {
        one.textContent = '℃';
        two.textContent = '℉';
        result.textContent = '';
    }
};


const fahrToCel = function () {
    let fahr = converter.value * 1.8 + 32;
    result.textContent = `${converter.value} ℃ to ${fahr.toFixed(1)}℉`;
};

const  celToFahr = function () {
    let cel = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value} ℉ to ${cel.toFixed(1)}℃`;
};

const convert = function () {
    if (converter.value !== '') {
        if (one.textContent === '℃') {
            fahrToCel();
        } else {
            celToFahr();
        }
    }
        };


const reset = function () {
        converter.value = '';
        result.textContent = '';
}





changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', fahrToCel);
resetBtn.addEventListener('click', reset);