let header = document.querySelector('header');
let button = document.querySelector('header li:last-child')

document.addEventListener('scroll', () => {
    if(window.scrollY > 382){
        header.style.backgroundColor = 'white';
        button.style.backgroundColor = '#1a8917';
        button.style.color = '#fff'
        header.style.transition = 'background-color 0.5s linear'
    } else {
        header.style.backgroundColor = '#ffc017'
        button.style.color = '#fff'
        button.style.backgroundColor = '#191919'
    }
})


let allM = document.querySelectorAll('svg path');

 console.log(allM);

setInterval( () => {
    let random = Math.floor(Math.random() * 273);
    // console.log(allM[random]);
    allM[random].style.opacity = 0;
    allM[random].style.transition = 'opacity 0.5s linear';

    setTimeout( () => {
        allM[random].style.opacity = 1;
        allM[random].style.transition = 'opacity 0.5s linear';
    }, 1000)


}, 100)
