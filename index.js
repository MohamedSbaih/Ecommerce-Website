const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const closeBtn = document.querySelector('#close-btn');

bar.addEventListener('click',()=>{
    nav.classList.add('active');
})
closeBtn.addEventListener('click',()=>{
    nav.classList.remove('active');
})