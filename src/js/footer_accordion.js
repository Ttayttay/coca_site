export const useFooterAccordion = () => {
  const footerAccordionItems = document.querySelectorAll('.footer__item');

  footerAccordionItems.forEach((e) => {
    e.addEventListener('click', (e) => {
      const footerAccordionBtn = e.target.closest('.footer__item-button');
      if (!footerAccordionBtn) return;
      if (document.documentElement.clientWidth > 389) return;

      const footerAccordionItem = footerAccordionBtn.parentElement;
      const footerAccordionContent = footerAccordionBtn.nextElementSibling;
      // console.log(footerAccordionContent)

      footerAccordionItem.classList.toggle('footer__item--active');

      if (footerAccordionItem.classList.contains('footer__item--active')) {
        footerAccordionContent.style.maxHeight =
          footerAccordionContent.scrollHeight + 'px';
      } else {
        footerAccordionContent.style.maxHeight = null;
      }
    });
  });
};
