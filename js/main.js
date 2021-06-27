var elsNavbarLink = document.querySelectorAll(".navbar__link");
var elModal = document.querySelector(".modal");
var elClose = elModal.querySelector(".navbar__link-close");

var openModal = function () {
  elModal.classList.add('modal--open');
};

var closeModal = function () {
  elModal.classList.remove('modal--open');
};

if (elsNavbarLink.length > 0){
  elsNavbarLink.forEach(function (link) {
    link.addEventListener('click', function (evt){
      evt.preventDefault();
      openModal();
    })
  })
}

if (elClose){
  elClose.addEventListener('click', function (){
    closeModal();
  })
}