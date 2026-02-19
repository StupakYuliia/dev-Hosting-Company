export const updatePrices = () => {
  const toggle = document.getElementById('pricing__toggle-checkbox');
  const prices = document.querySelectorAll('.tabs__content-price');

  if (!toggle || !prices.length) return;

  const isYearly = toggle.checked;
  prices.forEach(el => {
    const base = parseFloat(el.dataset.monthlyPrice);
    if (isNaN(base)) return;

    const finalPrice = isYearly ? (base * 12 * 0.8).toFixed(2) : base.toFixed(2);
    const text = isYearly ? 'Per year' : 'Per month';

    el.innerHTML = `${finalPrice}<span>${text}</span>`;
  });
};

// 2. Привязываем к window для глобального доступа
window.updatePrices = updatePrices;

(function() {
  const initBurger = () => {
    const btn = document.querySelector('.btn-burger');
    const nav = document.querySelector('.header-nav');
    if (btn && nav) {
      btn.onclick = () => {
        nav.classList.toggle('show');
        btn.classList.toggle('active');
      };
    }
  };

  // Инициализация бургера
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBurger);
  } else {
    initBurger();
  }

  // Инициализация цен
  try {
    const toggle = document.getElementById('pricing__toggle-checkbox');
    if (toggle) {
      // Используем экспортированную функцию
      toggle.addEventListener('change', updatePrices);
      updatePrices();
    }
  } catch (e) {

  }
})();

