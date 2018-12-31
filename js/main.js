'use strict';


function showArrow(el) {
    el.innerHTML += '<img src="img/arrow.png"></img>';
}

function hideArrow(el) {
    el.innerHTML = 'Continue Reading';
}

function toggleMenu() {
    document.body.classList.toggle('open');
}

function openModal() {
    document.querySelector('.modal').classList.add('show-modal');
    document.querySelector('.modal-screen').classList.add('show-modal');
}

function closeModal() {
    document.querySelector('.modal').classList.remove('show-modal');
    document.querySelector('.modal-screen').classList.remove('show-modal');
}

function addEmail() {
    document.querySelector('.modal').classList.remove('show-modal');
    document.querySelector('.modal-screen').classList.remove('show-modal');
    alert('THANK YOU!');
}