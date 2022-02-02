function bookScroll(){
    let st = window.pageXOffset || document.documentElement.scrollTop;
    const location = document.querySelector('.location');
    const main = document.querySelector('main');
    
    if(st >= 92){
        location.classList.add('fixed');
        main.style.marginTop = "45px";
    }else{
        location.classList.remove('fixed');
        main.style = "";
    }
}
bookScroll();
window.addEventListener('scroll', bookScroll);