const slide = document.querySelector('.slide'),
        list = slide.querySelector('ul'),
        item = slide.querySelectorAll('li'),
        pagination = document.querySelector('.vip-event .pagination'),
        pagiDot = pagination.querySelector('.dot'),
        num = pagination.querySelector('.num'),
        itemWidth = 560,
        slideSpeed = 600,
        startNum = 0; // initial slide index (0 ~ 2)
        
const all = pagination.querySelector('.all');
all.innerText = item.length;      

let firstChild = list.firstElementChild,
    lastChild = list.lastElementChild,
    clonedFirst = firstChild.cloneNode(true),
    clonedLast = lastChild.cloneNode(true);

list.appendChild(clonedFirst);
list.insertBefore(clonedLast, list.firstElementChild);

list.style.width = itemWidth * (item.length + 2) + "px";

let position = itemWidth * (startNum + 1);
list.style.transform = `translateX(-${position}px)`;

let curPos = startNum;
let curSlide = item[curPos];
curSlide.classList.add('slide_active');

pageNum.innerText = curPos + 1;


function prev(){
    if (curPos >= 0) {
        list.style.transition = slideSpeed + "ms";
        list.style.transform = "translate3d(-" + (itemWidth * curPos) + "px, 0px, 0px)";
    }
    if (curPos === 0) {
        setTimeout(function() {
        list.style.transition = "0ms";
        list.style.transform = "translate3d(-" + (itemWidth * item.length) + "px, 0px, 0px)";
        }, slideSpeed);
        curPos = item.length;
    }
    curSlide.classList.remove('slide_active');
    curSlide = item[--curPos];
    curSlide.classList.add('slide_active');
    pagiDot.style.transform = `translateX(${100 * curPos}%)`;
    num.innerText = curPos + 1;
}
function next(){
    if (curPos <= item.length - 1) {
        //모든 아이템 (마지막 아이템도 공통 적용)
        list.style.transition = slideSpeed + "ms";
        list.style.transform = "translate3d(-" + (itemWidth * (curPos + 2)) + "px, 0px, 0px)";
    }
    if (curPos === item.length - 1) {
        //마지막 아이템
        setTimeout(function() {
        list.style.transition = "0ms";
        list.style.transform = "translate3d(-" + itemWidth + "px, 0px, 0px)";
        }, slideSpeed);
        curPos = -1;  //맨 첫순서에 생성된 li로 돌아감
    }
    curSlide.classList.remove('slide_active');  //item에 slide_active 제거
    curSlide = item[++curPos];
    curSlide.classList.add('slide_active');
    pagiDot.style.transform = `translateX(${100 * curPos}%)`;
    num.innerText = curPos + 1;
}