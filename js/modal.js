// next step
const timeItem = document.querySelectorAll('.step-1 .time .cont a');
const modal = document.querySelectorAll('main .modal');

function modalNext() {
    modal[0].style.display = "block";
}
for (let i = 0; i < timeItem.length; i++) { 
    timeItem[i].addEventListener('click', modalNext);
}

function closeModal(event) { 
    const e = event.currentTarget;
    const content = e.parentNode.parentNode.parentNode;
    content.style.display = "none";
}

function nextStep(event) { 
    const e = event.currentTarget;
    const content = e.parentNode.parentNode.parentNode;
    content.style.display = "none";
    modal[1].style.display = "block"
    stepOne.style.display = "none";
    stepTwo.style.display = "grid";
}


//login modal
function loginModal() {
    const modalLogin = document.getElementById('modalLogin');
    modalLogin.style.display = "block";

    const typeBtn = modalLogin.querySelectorAll('.type-btn  button');
    const loginCont = modalLogin.querySelectorAll('.login-cont');

    for (let i = 0; i < typeBtn.length; i++) { 
        typeBtn[i].addEventListener('click', () => { 
            let j = 0,
                k = 0;
            while (j < typeBtn.length && k < typeBtn.length) { 
                typeBtn[j++].classList.remove('active');
                loginCont[k++].classList.remove('active');
            }
            typeBtn[i].classList.add('active');
            loginCont[i].classList.add('active');
        })
    }
}

function callLogin() { 
    loginModal();
}