import { installTabs } from './tab.js';
import { updatePrices } from './custom.js';

export function initAppLogic() {
    installTabs();

    const toggleCheckbox = document.getElementById('pricing__toggle-checkbox');
    if (toggleCheckbox) {
        updatePrices();
        toggleCheckbox.addEventListener('change', updatePrices);
    }
}
