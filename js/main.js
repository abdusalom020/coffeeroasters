var elsHeader = document.querySelector('.site-header');
var elsHeaderBtn = elsHeader.querySelector('.side-header__btn');

if (elsHeaderBtn){
  elsHeaderBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('side-header--open');
  });
}

var elsRightFormItem = document.querySelectorAll(".right-form__item");
var elsRightHeaderBtn = document.querySelectorAll(".right-header__btn");

elsRightHeaderBtn.forEach(function (open) {
  open.addEventListener('click', function () {
    open.closest('.right-form__item').classList.toggle('right-form__item--active');
  })
})