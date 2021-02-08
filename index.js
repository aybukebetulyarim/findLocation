import React from 'react';
import ReactDOM from 'react-dom';
import DecideSport from './decideSport.js';

// Class base component oluşturacağız.
class App extends React.Component {
  render() {
    return(
      <div>
        <DecideSport/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
