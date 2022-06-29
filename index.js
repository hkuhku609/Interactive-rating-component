'use strict';

let getNum = document.querySelectorAll('.circle-text');
let btn = document.querySelector('.btn');
let span = document.querySelector('.span');
let container = document.querySelector('.container');
let container2 = document.querySelector('.container2');

for (let i = 0; i < getNum.length; i++) {
  getNum[i].addEventListener('click', () => {
    let selectedNum = getNum[i].innerHTML;
    for (let i = 0; i < getNum.length; i++) {
      if (getNum[i].classList.contains('selected')) {
        getNum[i].classList.remove('selected');
      }
    }
    getNum[i].classList.add('selected');
    btn.addEventListener('click', () => {
      span.innerHTML = selectedNum;
      container.style.display = 'none';
      container2.style.display = 'block';
    });
  });
}
