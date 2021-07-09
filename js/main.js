// HEADER NAV MOBILE
 
var elsHeader = document.querySelector('.site-header');
var elsHeaderBtn = elsHeader.querySelector('.side-header__btn');

if (elsHeaderBtn){
  elsHeaderBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('side-header--open');
  });
}

// SUBSCRIBE FORM

// var elsRightFormItem = document.querySelectorAll(".right-form__item");
// var elsRightHeaderBtn = document.querySelectorAll(".right-header__btn");

// elsRightHeaderBtn.forEach(function (open) {
//   open.addEventListener('click', function () {
//     open.closest('.right-form__item').classList.toggle('right-form__item--active');
//   })
// })

var elsFormGroupToggler = document.querySelectorAll('.js-form-group-toggler');

if (elsFormGroupToggler.length > 0) {
  elsFormGroupToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function () {
      toggler.closest('.form-group').classList.toggle('form-group--open');
    });
  });
}

var elsCustomRadioInput = document.querySelectorAll('.custom-radio__input');

if (elsCustomRadioInput.length > 0) {
  elsCustomRadioInput.forEach(function (customRadio) {
    customRadio.addEventListener('change', function (evt) {
      var summaryField = document.querySelector(customRadio.closest('label').dataset.summaryTarget);
      var radioValue = customRadio.nextElementSibling.children[0].textContent;
      summaryField.textContent = radioValue;
    });
  });
}

// SUBSCRIBE MODAL

var elsRightFormCreateLink = document.querySelector('.right-form__create-link');
var elModal = document.querySelector('.modal');

elsRightFormCreateLink.addEventListener('click', function () {
  // evt.preventDefault();
  elModal.classList.add('modal--open');
})

window.onclick = function(event) {
  if (event.target == elModal) {
    elModal.classList.remove('modal--open');
  }
}



