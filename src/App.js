import React, { Component } from 'react';
import TodoList from './containers/TodoList/TodoList';
import TodoDetail from './containers/TodoDetail/TodoDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" exact component={TodoList} />
        <Route path="/todos/:id" exact component = {TodoDetail} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
