import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';


import { Provider } from 'react-redux'

import store from './store';
import NavBar from './components/layouts/NavBar'
import Question from './components/question/Question'
import CreateQuestion from './components/question/Form'




export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='container-fluid'>
            <Route path='/' component={NavBar}></Route>
            <Route exact path='/' component={Question}></Route>
            <Route exact path='/add-question' component={CreateQuestion}></Route>
          </div>
        </BrowserRouter>
      </Provider >
    )
  }
}

export default ReactDOM.render(<App />, document.getElementById('root'))
