import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const click = (event) => {
  debugger
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={click} />
  </div>,
  document.getElementById('root')
);
