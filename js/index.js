//슬라이드 배너
function slideBanner() {
    let curPos = 0;
    const slide = document.querySelector('#slide-bn .slide'),
        item = slide.querySelectorAll('li'),
        pagination = document.querySelector('#slide-bn .pagination'),
        pagiDot = pagination.querySelector('.dot'),
        num = pagination.querySelector('.num'),
        all = pagination.querySelector('.all'),
        prevBtn = pagination.querySelector('.prev-btn'),
        nextBtn = pagination.querySelector('.next-btn');

    all.innerText = item.length;
    num.innerText = curPos + 1;

    function removeItem(){
        let j = 0;
        while(j < item.length){
            item[j++].classList.remove('active');
        }
    }

    function prev(){
        if(curPos > 0){
            curPos -= 1;
        }else{
            curPos = item.length - 1;
        }
        removeItem();
        item[curPos].classList.add('active');
        pagiDot.style.transform = `translateX(${100 * curPos}%)`;
        num.innerText = curPos + 1;
    }

    function next(){
        if(curPos < item.length - 1){
            curPos += 1;
        }else {
            curPos = 0;
        }
        removeItem();
        item[curPos].classList.add('active');
        pagiDot.style.transform = `translateX(${100 * curPos}%)`;
        num.innerText = curPos + 1;
    }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    function play(){
        setInterval(next, 3500);
    }
    play();
}
slideBanner();