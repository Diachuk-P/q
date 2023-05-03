const btnSignUp = document.querySelector('.btn-sign-up'),
      modalForms = document.querySelector('.modal-forms'),
      bodyHtml = document.body,
      modalClose = document.querySelectorAll('.close-btn-form'),
      btnShowModalSigUp = document.querySelector('.log-in'),
      formLogIn = document.getElementById('log-in-form'),
      forms = document.querySelectorAll('.form_modal'),
      btnsLogIn = document.querySelectorAll('.smallBtnLinkLogIn'),
      formSignUp = document.getElementById('sign-up-form'),
      smallBtnSignUp = document.querySelector('.btn-sign-up-logInForm'),
      formModalWindow = document.querySelector('.form-modal-window'),
      modalCloseBtn = document.querySelector('[data-close]');
      

smallBtnSignUp.addEventListener('click', () => {
    openModalCleaner();
    for(let form of forms){
        form.classList.add('d-none')
    }
    formSignUp.classList.remove('d-none');
})
function openModalCleaner () {
    let modals = document.querySelectorAll('input'),
        errors = document.querySelectorAll('.error'),
        errWrapper = document.querySelectorAll('.error-wrapper'),
        errorInput = document.querySelectorAll('.errorInput');

        console.log(errors);
    for (let input of modals){
        input.value = '';
    }
    for(let error of errors){
        error.classList.remove('error')
    }
    for(let i of errWrapper){
        i.classList.add('d-none')
    }
    for(let input of errorInput){
        input.classList.remove('errorInput')
    }
}
function closeModal () {
    bodyHtml.classList.remove('scroll-hidden');
    modalForms.style.display = 'none';
    openModalCleaner();
}
      
modalForms.addEventListener('click', (e) => {
    
    if(e.target === modalForms){
        openModalCleaner();
        closeModal ()
    }
})

modalCloseBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) =>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal()
        }
    })


for(let buttons of btnsLogIn){
    buttons.addEventListener('click', () => {
        for(let form of forms){
            form.classList.add('d-none')
        }
        formLogIn.classList.remove('d-none');
        // console.log(forms);
        console.log(buttons);
    })
}



btnSignUp.addEventListener('click', () => {
    openModalCleaner();
    modalForms.style.display = 'block';
    bodyHtml.classList.add('scroll-hidden');
    for(let form of forms){
        form.classList.add('d-none')
    }
    formSignUp.classList.remove('d-none');
})

btnShowModalSigUp.addEventListener('click', () => {
    openModalCleaner();
    modalForms.style.display = 'block';
    bodyHtml.classList.add('scroll-hidden');
    for(let form of forms){
        form.classList.add('d-none')
    }
    formLogIn.classList.remove('d-none');
})

for(let close of modalClose){
	close.addEventListener('click', () => {
    bodyHtml.classList.remove('scroll-hidden');
    modalForms.style.display = 'none';
	})
}


// number valib
const tel = document.querySelector('#tel'),
      el = document.querySelector('.span');


let reg = /[A-Za-zA-Яа-яЁё]/g;
tel.oninput = function(){
this.value = this.value.replace(reg, '')
}




const inputAffiliate = document.getElementById('inputAffiliate'),
      profitValue = document.getElementById('profit_value'),
      profitRate = document.getElementById('profit_rate'),
      btnProfitValue = document.getElementById('btn_profit_value'),
      symbolEuro = document.querySelector('.affiliate-amount-content__symbol'),
      inputBtcVal = document.querySelector('.affiliate-form__input');


// inputAffiliate.oninput = function(){
//     inputAffiliate.value = this.value.replace(reg, '')
// }
inputAffiliate.addEventListener('click', (e) => {
    symbolEuro.classList.add('d-none');
    // if (!e.contains(e.target)){
    //     console.log('1');
    //     // e.style.display='none'
    // } ;
})

document.addEventListener('click', function(event) {
    let e = inputAffiliate;
    if (!e.contains(event.target)){
        symbolEuro.classList.remove('d-none')
    };
  });

const curencyValue = document.querySelector('.custom-select-trigger');

inputAffiliate.oninput  = (e) => {

    const { value } = e.target;
   let widthCount = inputBtcVal.style.maxWidth = inputAffiliate.value.length*25;
//     console.log(`${widthCount}px`);
    console.log(widthCount);
    inputBtcVal.style.maxWidth = `${widthCount}px`
    profitValue.innerHTML = value;
    btnProfitValue.innerHTML = value;
    if(symbolEuro.innerHTML == ' BTC'){
        console.log('btcq');
        if(value < 1){
            profitValue.innerHTML = value * 4;
            profitRate.innerHTML = 25;
            
        }else if(value > 1 && value < 2){
            profitValue.innerHTML = (value / 0.3).toFixed(2);
            profitRate.innerHTML = 30;
        }else if(value > 1.9 && value <= 3.9){
            profitValue.innerHTML = (value / 0.35).toFixed(2);
            profitRate.innerHTML = 35;
        }else if(value > 4){
            profitValue.innerHTML = (value / 0.4).toFixed(2);
            profitRate.innerHTML = 40;
        }
    }else{
        if(value < 5000){
            profitValue.innerHTML = value * 4;
            profitRate.innerHTML = 25;
            
        }else if(value > 4999 && value < 9999){
            profitValue.innerHTML = (value / 0.3).toFixed(2);
            profitRate.innerHTML = 30;
        }else if(value > 9999 && value <= 19999){
            profitValue.innerHTML = (value / 0.35).toFixed(2);
            profitRate.innerHTML = 35;
        }else if(value > 20000){
            profitValue.innerHTML = (value / 0.4).toFixed(2);
            profitRate.innerHTML = 40;
        }
    }
    
    // console.log(value);
    
}


const btnGetStart = document.getElementById('btnGetStart'),
      btnCommision = document.getElementById('btnCommision'),
      commissionFaq = document.getElementById('commissionFaq'),
      getStart = document.getElementById('getStart'),
      faqBtn = document.querySelectorAll('.faq-btn');



btnGetStart.addEventListener('click', (e) => {
    e.preventDefault();
    openModalCleaner();
    for(let btn of faqBtn){
        btn.classList.remove('secondary')
    }
    // console.log(faqBtn);
    commissionFaq.classList.add('d-none')
    getStart.classList.remove('d-none')
    btnCommision.classList.add('secondary')
    // if(e.target == e.target){
    //     console.log('error');
    //     btnGetStart.classList.('secondary');
    // }
    
})
btnCommision.addEventListener('click', (e) => {
    e.preventDefault();
    openModalCleaner();
    for(let btn of faqBtn){
        btn.classList.remove('secondary')
    }
    // if(e.target !== e.target){
    //     console.log('error');
    //     btnCommision.classList.toggle('secondary');
    // }
    btnGetStart.classList.add('secondary')
    commissionFaq.classList.remove('d-none')
    getStart.classList.add('d-none')
    console.log('com');
    
})




// const btnLangSwitch = document.querySelector('.language-switcher'),
//       langList = document.querySelector('.language-list');


// btnLangSwitch.addEventListener('click', () => {
//     langList.classList.toggle('d-none');
// })

const headerLinksCommision = document.querySelectorAll('.menu__item-link'),
      aboutSection = document.getElementById('about'),
      faqSection = document.getElementById('faq'),
      contactUsSection = document.getElementById('contact');


for(let link of headerLinksCommision){
    link.addEventListener('click', () => {
        if(link.innerText.toLowerCase().indexOf('commission') == 0){
            commission.scrollIntoView({behavior: "smooth"});
        }else if(link.innerText.toLowerCase().indexOf('about') == 0){
            aboutSection.scrollIntoView({behavior: "smooth"});
            console.log(link.innerText.toLowerCase());
        }else if(link.innerText.toLowerCase().indexOf('faq') == 0){
            faqSection.scrollIntoView({behavior: "smooth"});
            // ,block: "end", inline: "end"
        }else if(link.innerText.toLowerCase().indexOf('contact') == 0){
            contactUsSection.scrollIntoView({behavior: "smooth"});
        }
        // console.log(link.innerText.toLowerCase());
    })

}
// console.log(headerLinksCommision);



const btnSrartEarning = document.getElementById('commision-cta'),
      affiliateForm = document.getElementById('affiliate-form');
      console.log(btnSrartEarning);
      console.log(affiliateForm);
btnSrartEarning.addEventListener('click', (e) => {
    e.preventDefault();
    openModalCleaner ();
    modalForms.style.display = 'block';
    bodyHtml.classList.add('scroll-hidden');
    for(let form of forms){
        form.classList.add('d-none')
    }
    formSignUp.classList.remove('d-none');
    // affiliateForm.classList.add('d-none');

})


const joinBtn = document.querySelector('.join');


const commissionBtns = document.querySelector('.commission-currencies'),
      commissionBtn = commissionBtns.querySelectorAll('button');

function hideTabContent() {
    commissionBtn.forEach(tab =>{
        tab.classList.remove('is-active');
      })
  
  }
  
  function showTabContent(i = 0) {
    commissionBtn[i].classList.add('is-active')
    // let activeBtn = 
    if(commissionBtn[i].innerText == 'USD'){
        commission.style.backgroundImage = 'url(assets/img/commission-usd-en.967460.svg) '
    }else if(commissionBtn[i].innerText == 'EUR'){
        commission.style.backgroundImage = 'url(assets/img/commission-eur-en.967460a3.svg)';
    }else if(commissionBtn[i].innerText == 'BTC' ){
        commission.style.backgroundImage = 'url(assets/img/commission-btc-en.967460a.svg)';
    }
  }

commissionBtns.addEventListener('click', (e) => {
    const buttonCurr = e.target;
    commissionBtn.forEach((item, i) => {
        if(buttonCurr && buttonCurr.classList.contains('commission-currencies__btn')){
            if(buttonCurr == item) {
                hideTabContent()
                showTabContent(i)
            }
        }
    })
})

// commission

const commissionCtaBtn = document.querySelector('.commission-cta__btn'),
      logoImgScrollTop = document.querySelector('.navbar__logo');

commissionCtaBtn.addEventListener('click', (e) => {
    // window.onscroll = function() {scrollFunction()};
    e.preventDefault();

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    topFunction();
})
logoImgScrollTop.addEventListener('click', (e) => {
    // window.onscroll = function() {scrollFunction()};
    e.preventDefault();

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    topFunction();
})

const modalAffiliateClose = document.querySelector('.modal-affiliate-close'),
      modalAffiliate = document.querySelector('.modal-affiliate-program-terms'),
      btnsOpenModalTermsCond = document.querySelectorAll('.commission-cta__link');


for(let btn of btnsOpenModalTermsCond){
    console.log(btn);
    btn.addEventListener('click', () => {
        modalAffiliate.classList.remove('d-none');
        bodyHtml.classList.add('scroll-hidden');
    })
}


modalAffiliateClose.addEventListener('click', () => {
    modalAffiliate.classList.add('d-none')
    bodyHtml.classList.remove('scroll-hidden');
})
