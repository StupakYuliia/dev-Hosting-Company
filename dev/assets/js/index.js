import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App'
import ContentBlock from '../../components/ContentBlock'
import {initAppLogic} from "./init"

document.addEventListener('DOMContentLoaded', () => {
    const app = ReactDOMClient.createRoot(document.getElementById("app"))
    app.render(<App/>)

	initAppLogic();
})

document.addEventListener('DOMContentLoaded', () => {
	const testimonialsRroot = ReactDOMClient.createRoot(document.getElementById("testimonials-cards"))
	testimonialsRroot.render(<ContentBlock
		title="Real Stories from Real Customers"
		text="Get inspired by these stories."
	/>)
})

document.addEventListener('DOMContentLoaded', () => {
	const testimonialsRroot = ReactDOMClient.createRoot(document.getElementById("testimonials-logos"))
	testimonialsRroot.render(<ContentBlock
		title="We serve over 100 Nigerian Websites"
		text="Connect LemonWares with your favourite tools that you use daily and keep things on track."
	/>)
})
