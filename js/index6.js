
let ativo1 = document.querySelector('.ativo1')
let ativo2 = document.querySelector('.ativo2')
let ativo3 = document.querySelector('.ativo3')
let ativo4 = document.querySelector('.ativo4')

let show0= document.querySelector('.show0')
let show1= document.querySelector('.show1')
let show2= document.querySelector('.show2')
let show3= document.querySelector('.show3')
let show4= document.querySelector('.show4')

ativo1.addEventListener('click', function(){
    show1.classList.remove('show1')
    show0.style.display='none'
    show2.classList.add('show2')
    show3.classList.add('show3')
    show4.classList.add('show4')
})
ativo2.addEventListener('click', function(){
    show2.classList.remove('show2')
    show0.style.display='none'
    show1.classList.add('show1')
    show3.classList.add('show3')
    show4.classList.add('show4')
})
ativo3.addEventListener('click', function(){
    show3.classList.remove('show3')
    show0.style.display='none'
    show2.classList.add('show2')
    show4.classList.add('show4')
    show1.classList.add('show1')
})
ativo4.addEventListener('click', function(){
    show4.classList.remove('show4')
    show0.style.display='none'
    show2.classList.add('show2')
    show3.classList.add('show3')
    show1.classList.add('show1')
})