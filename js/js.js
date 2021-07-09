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
