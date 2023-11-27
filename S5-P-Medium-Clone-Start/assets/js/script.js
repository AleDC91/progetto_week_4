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
