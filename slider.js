const stepNextBtn  = document.querySelector('#right');
const stepPrevBtn  = document.querySelector('#left');
const slider = document.querySelector('.wrapper__container__review__slider');
const slide = document.querySelectorAll('.wrapper__container__review__slider__item');

let activeSlide = 0;

updateSlide();

stepPrevBtn.addEventListener('click', () => {
    activeSlide = Math.max(activeSlide - 1, 0);
    slider.scrollTo({ left: activeSlide * slider.clientWidth, behavior: 'smooth' });
    updateSlide();
  });
  
stepNextBtn.addEventListener('click', () => {
activeSlide = Math.min(activeSlide + 1, slide.length - 1);
slider.scrollTo({ left: activeSlide * slider.clientWidth, behavior: 'smooth' });
updateSlide();
});

function updateSlide() {
    stepPrevBtn.disabled = activeSlide === 0;
    stepNextBtn.disabled = activeSlide >= slide.length - 1;
}
  

