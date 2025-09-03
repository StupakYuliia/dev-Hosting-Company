function installTabs() {
	const tabsContent = document.querySelectorAll('.tabs__content')
	const tabsButton = document.querySelectorAll('.tabs__button')

	function addClass(selector, className) {
		selector.classList.add(className)
	}

	const addAttr = (selectors, attrName, attValue) => {
		selectors.forEach((item, index) => {
			item.setAttribute(attrName, attValue+index)
		})
	}
	addAttr(tabsButton, 'data-content', 'content-')
	addAttr(tabsContent, 'id', 'content-')

	const removeTabsActivesClasses =(elements)=> elements.forEach(item => {
				item.classList.remove('active')
	})

	tabsButton.forEach(btn => {
		btn.addEventListener('click', ()=> {
			const dataContent = btn.getAttribute('data-content')
			const thisTabs = btn.closest('.tabs');
			const thisTabsContents = thisTabs.querySelectorAll('.tabs__content')
			const thisTabsButton = thisTabs.querySelectorAll('.tabs__button')
			const thisActiveContents = thisTabs.querySelector("#" + dataContent)

			removeTabsActivesClasses(thisTabsButton)
			removeTabsActivesClasses(thisTabsContents)

			addClass(thisActiveContents, 'active')
			addClass(btn, 'active')
		})
	})
}
