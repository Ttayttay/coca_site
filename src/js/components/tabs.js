export const useTabsNews = () => {
  const tabControls = document.querySelector('.tabs-news__control');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    e.preventDefault();

    const tabButton = e.target.closest(".tabs-news__control-link");

    if (!tabButton) return;

    document
      .querySelector('.tabs-news__control-link--active')
      .classList.remove('tabs-news__control-link--active');
    tabButton.classList.add('tabs-news__control-link--active');
  }
};
