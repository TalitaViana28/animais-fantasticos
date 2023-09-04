 export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const ativeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(ativeClass);
    this.nextElementSibling.classList.toggle(ativeClass);
  }

    if(accordionList.length){
      accordionList[0].classList.add(ativeClass);
      accordionList[0].nextElementSibling.classList.add(ativeClass);
  
      accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
      });
    }
  }