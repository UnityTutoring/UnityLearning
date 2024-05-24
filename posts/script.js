let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', ()=>{
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

})