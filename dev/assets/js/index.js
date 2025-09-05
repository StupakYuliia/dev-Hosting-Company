import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
    const app = ReactDOMClient.createRoot(document.getElementById("app"))
    app.render(<App/>)
})
