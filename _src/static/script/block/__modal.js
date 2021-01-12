// $('[data-btn="modal"]').magnificPopup({
//   type:'inline',
//   showCloseBtn:false,
//   callbacks: {
//     open: function() {
//         $('[data-btn="close-modal"]').on('click',function(){
//           $.magnificPopup.close();
//         });
//     }
//   }
// });

const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav');


header.classList.remove('page-header__wrap--active');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header__toggle--closed')) {
    navToggle.classList.remove('header__toggle--closed');
    navToggle.classList.add('header__toggle--opened');
    header.classList.remove('header__wrap--active');
    nav.classList.remove('nav--js');
  }
  else {
    navToggle.classList.add('header__toggle--closed');
    navToggle.classList.remove('header__toggle--opened');
    header.classList.add('header__wrap--active');
    nav.classList.add('nav--js');
  }
});


const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.product-card__btn');
const modalClose = document.querySelector('.modal-add__btn');

modal.classList.remove('modal--show');

// for(let i = 0; i < modalBtn.length; i++) {

modalBtn.addEventListener('click', function(evt) {
evt.preventDefault();
modal.classList.add('modal--show');
});
// }

modalClose.addEventListener('click', function(evt) {
evt.preventDefault();
modal.classList.remove('modal--show');
});

window.addEventListener('keydown', function(evt) {
if(evt.keyCode===27) {
if(modal.classList.contains('modal--show')) {
evt.preventDefault();
modal.classList.remove('modal--show');
}
}
});
