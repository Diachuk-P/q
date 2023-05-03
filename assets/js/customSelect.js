$(".custom-select").each(function() {
    let classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    let template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });

  const numberWhatsAppForm = document.querySelector('.whatsapp-number-form'),
        skypeForm = document.querySelector('.skype-form'),
        telegramForm = document.querySelector('.telegram-form'),
        currencySymbol = document.querySelectorAll('.affiliate-amount-content__symbol');

const  spanSel = document.querySelector('.custom-select-trigger'),
       inputBtcWrap = document.querySelector('.input-currency'),
       inputBtc = document.querySelector('.affiliate-form__input'),
       btnProfitValue2 = document.getElementById('btn_profit_value');

  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    // console.log();
    function makeSymbol (arr, symbol) {
      for (let span of arr){
        span.innerHTML = symbol;
      }
    }
    let BTCValue = inputBtc.querySelector('input').getAttribute('placeholder');
    function changeCripto (currency){
      if(currency == 'btc'){
        inputBtcWrap.style.maxWidth = "80%";
        currencySymbol[0].classList.add('is-crypto');

        inputBtc.style.maxWidth = '23%';
        
        // BTCValue.getAttribute('placeholder') = '0,1';
      }else{
        inputBtcWrap.style.maxWidth = "";
        currencySymbol[0].classList.remove('is-crypto');
        inputBtc.style.maxWidth = '';
      }
    }


    if($(this).data("value") == 'whatsapp'){
      skypeForm.classList.add('d-none');
      telegramForm.classList.add('d-none')
      numberWhatsAppForm.classList.remove('d-none');
      spanSel.classList.remove('error')
    }else if($(this).data("value") == 'skype'){
      numberWhatsAppForm.classList.add('d-none');
      telegramForm.classList.add('d-none')
      skypeForm.classList.remove('d-none');
      spanSel.classList.remove('error')
    }else if($(this).data("value") == 'telegram'){
      numberWhatsAppForm.classList.add('d-none');
      skypeForm.classList.add('d-none');
      telegramForm.classList.remove('d-none')
      spanSel.classList.remove('error')
    }else if($(this).data("value") == 'eur'){
      makeSymbol(currencySymbol, ' € ')
      changeCripto($(this).data("value"))

    }else if($(this).data("value") == 'usd'){
      makeSymbol(currencySymbol, ' $')
      changeCripto($(this).data("value"))

      // btnProfitValue2.innerHTML = `${BTCValue}`
      console.log(btnProfitValue);
      console.log(BTCValue);
      // currencySymbol.innerHTML = '$ ';
    }else if($(this).data("value") == 'btc'){
      // currencySymbol.innerHTML = 'BTC ';
      makeSymbol(currencySymbol, ' BTC');
      changeCripto($(this).data("value"))
      // inputBtcWrap.style.maxWidth = "80%";
      // console.log(currencySymbol);
      // currencySymbol[0].classList.add('is-crypto');
      // inputBtc.style.maxWidth = '27%';
    }


    const numberWhatsAppForm1 = document.querySelector('.whatsapp-number-form3'),
  skypeForm1 = document.querySelector('.skype-form1'),
  telegramForm1 = document.querySelector('.telegram-form2');

  if($(this).data("value") == 'whatsapp'){
    skypeForm1.classList.add('d-none');
    telegramForm1.classList.add('d-none')
    numberWhatsAppForm1.classList.remove('d-none');
    spanSel.classList.remove('error')
  }else if($(this).data("value") == 'skype'){
    numberWhatsAppForm1.classList.add('d-none');
    telegramForm1.classList.add('d-none')
    skypeForm1.classList.remove('d-none');
    spanSel.classList.remove('error')
  }else if($(this).data("value") == 'telegram'){
    numberWhatsAppForm1.classList.add('d-none');
    skypeForm1.classList.add('d-none');
    telegramForm1.classList.remove('d-none')
    spanSel.classList.remove('error')
  }
  });




  