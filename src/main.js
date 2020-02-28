import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const App = ({ name }) => (
  <main className="w-full flex justify-center">
    <h1 className="text-6xl">Hello, {name}!</h1>
  </main>
)

ReactDOM.render(App({name: 'World'}), document.querySelector('main#app'))
