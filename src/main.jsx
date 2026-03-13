import React from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form'
import App from './App'
import Practice from './Practice'


const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  
    <Practice />
  
)
