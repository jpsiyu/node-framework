import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Entry from './entry'

const app = new App()
app.start()

ReactDOM.render(
    <Entry />,
    document.getElementById('root')
)