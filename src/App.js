import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <FontAwesomeIcon icon={faHome}/>
          Hey
        </div>
        <div className="col-6">
          Hello
        </div>
      </div>
    </div>
  );
}

export default App;
