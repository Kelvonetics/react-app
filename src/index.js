import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Heading from './components/Heading';
import PersonDetail from './components/PersonDetail';
import rootReducer from './reducers';
//import PeopleList from './components/PeopleList';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';

import Forms from './components/Forms';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      
      <Heading />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={PersonDetail} />
        <Route exact path="/Forms" component={Forms} />
      </Switch>
      

    </BrowserRouter>
  </Provider>
    
  , document.getElementById('root'));
