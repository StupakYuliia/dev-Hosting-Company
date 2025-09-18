// Находим чекбокс и все элементы с ценами
const toggleCheckbox = document.getElementById('pricing__toggle-checkbox');
const priceElements = document.querySelectorAll('.tabs__content-price');

// Функция для обновления цен
export function updatePrices() {
	const isYearly = toggleCheckbox.checked;
  	const discount = 0.8; // 20% скидка

	priceElements.forEach(priceElement => {
    // Получаем месячную цену, которую добавляем в HTML как data-атрибут
    const monthlyPrice = parseFloat(priceElement.dataset.monthlyPrice);

    let newPrice;
    let periodText;

    if (isYearly) {
      // Вычисляем годовую цену с 20% скидкой
    	newPrice = (monthlyPrice * 12 * discount).toFixed(2);
		periodText = 'Per year';
    } else {
      // Возвращаем месячную цену
    	newPrice = monthlyPrice.toFixed(2);
    	periodText = 'Per month';
    }

    // Обновляем текст внутри элемента с ценой
    priceElement.innerHTML = `$${newPrice}<span>${periodText}</span>`;
	});
}

// Добавляем слушатель события на изменение состояния чекбокса
toggleCheckbox.addEventListener('change', updatePrices);

// Вызываем функцию один раз при загрузке страницы для установки начальных цен
updatePrices();
