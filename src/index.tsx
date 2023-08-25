import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/index.scss'

const element = document.getElementById('app')
const root = createRoot(element!)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
