import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import Home from './src/home/Home'

// import styles from './index.less'

class App extends React.Component {
  render() {
    return (
      <Home
        openLogin={this.props.openLogin}
        toggleForm={this.props.toggleForm}
      />
    )
  }
}
export default App
