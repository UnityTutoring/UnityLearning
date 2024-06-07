let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', ()=>{
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

})
let main = document.querySelector('.mainlogo');
menuBtn.addEventListener('click', ()=>{
	menuBtn.classList.toggle('active');
	main.classList.toggle('active');

})


