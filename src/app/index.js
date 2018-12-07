// import React, { Component } from "react";
// import { render } from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "Max"
//     };
//   }

//   changeUsername(newName) {
//     this.setState({
//       username: newName
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername={this.changeUsername.bind(this)} />
//         <User username={this.state.username} />
//       </div>
//     );
//   }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBSTRACT":
      state = state - action.payload;
      break;
  }

  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 22
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 80
});