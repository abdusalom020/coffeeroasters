var elsHeader = document.querySelector('.site-header');
var elsHeaderBtn = elsHeader.querySelector('.side-header__btn');

if (elsHeaderBtn){
  elsHeaderBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('side-header--open');
  });
}