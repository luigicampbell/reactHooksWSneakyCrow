import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from './components/Toggler';

const App = () => (
  <div>
    <Toggler>
      <p>Neat</p>
    </Toggler>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
