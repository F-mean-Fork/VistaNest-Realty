(() => {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.wrapper__container__nav');
    const menuCloseItem = document.querySelector('.wrapper__container__nav__close');
    const burgerLinks = document.querySelectorAll('.wrapper__container__nav__link');
   
    burgerItem.addEventListener('click', () => {
      menu.classList.add('wrapper__container__nav--active');
    });
  
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('wrapper__container__nav--active');
    });
  
    burgerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const isAnchorLink = targetId.startsWith('#');
  
        if (isAnchorLink) {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = targetId;
        }
  
        menu.classList.remove('wrapper__container__nav--active');
      });
    });
})();