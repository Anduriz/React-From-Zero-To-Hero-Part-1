import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
)
