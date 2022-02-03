//location fixed
function bookScroll() {
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


// next step
const timeItem = document.querySelectorAll('.time .cont button');
const modal = document.querySelector('main .modal');
const stepOne = document.querySelector('.step-1');
const stepTwo = document.querySelector('.step-2');

function modalNext() {
    modal.style.display = "block";
}
for (let i = 0; i < timeItem.length; i++) { 
    timeItem[i].addEventListener('click', modalNext);
}

function closeModal() { 
    modal.style.display = "none";
}

function nextStep() { 
    modal.style.display = "none";
    stepOne.style.display = "none";
    stepTwo.style.display = "grid";
}

// step-2
function count() { 
    const minusBtns = stepTwo.querySelectorAll(".minus");
    const plusBtns = stepTwo.querySelectorAll(".plus");

    minusBtns.forEach((btnPlus) => {
        btnPlus.addEventListener("click",function(e){
            let result = e.target.nextElementSibling;
            if(result.value > 1){
                result.value--;
            } else{
                result.value = 0;
            }
        })
    })
    plusBtns.forEach((btnPlus) => {
        btnPlus.addEventListener("click", function (e) {
            stepTwo.querySelector('.first-seen').style.display = "none";
            
            let result = e.target.previousElementSibling;
            if (result.value < 6) {
                result.value++;
            } else { 
                alert('최대 6명까지 선택 가능합니다.');
            }
        })
    })
}
count();

const timeBtn = stepTwo.querySelector('.time .now');
const timeSelect = stepTwo.querySelector('.another');
timeBtn.addEventListener('click', () => { 
    timeSelect.classList.toggle('open');
    timeBtn.classList.toggle('click');
})