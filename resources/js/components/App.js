import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navigation appName={this.props.name}/>
        </div>
      </BrowserRouter>
    )
  }
}

if (document.getElementById('app')) {
    const appElement = document.getElementById('app');
    const appName = appElement.getAttribute('data-app-name')
    ReactDOM.render(<App name={appName} />, appElement)
}
