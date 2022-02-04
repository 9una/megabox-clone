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

// step-1
function movie() { 

}

function theather() {
    const list = document.querySelectorAll('.theather .list > ul > li');
    for (let i = 0; i < list.length; i++) { 
        list[i].addEventListener('click', () => { 
            let j = 0;
            while (j < list.length) { 
                list[j++].classList.remove('active');
            }
            list[i].classList.add('active');
        })
    }
}
theather();


// next step
const stepOne = document.querySelector('.step-1');
const stepTwo = document.querySelector('.step-2');

// step-2
function count() { 
    const minusBtns = stepTwo.querySelectorAll(".minus");
    const plusBtns = stepTwo.querySelectorAll(".plus");
    const resetBtn = stepTwo.querySelector('.reset-btn');

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

    resetBtn.addEventListener('click', () => { 
        const result = stepTwo.querySelectorAll('.count-cont .result');
        for (let i = 0; i < result.length; i++) { 
            result[i].value = 0;
        }
    })
}
count();

const timeBtn = stepTwo.querySelector('.time .now');
const timeSelect = stepTwo.querySelector('.another');
timeBtn.addEventListener('click', () => { 
    timeSelect.classList.toggle('open');
    timeBtn.classList.toggle('click');
})

//prev step
function prevStep() { 
    stepTwo.style.display = "none";
    stepOne.style.display = "grid";
}
