import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div id="App">
      <header className="header" id='App-header'>
        <h1>Smokin Karbs</h1>
      <button className='btn-light btn-lg' id='navButton'><FontAwesomeIcon icon={faListSquares} />Navbar</button>
        <ul id='navList' className='hidden'>
          <li id='navItem1' className='navItem'>Home 'active'</li>
          <li id='navItem2' className='navItem'>Inventory</li>
            {/*Add types of products withing Inventory */}
          <li id='navItem3' className='navItem'>Special Events and Offers</li>
          <li id='navItem4' className='navItem'>Contact</li>
            {/*Social media, copyright and direct contact info within */}
        </ul>
      </header>
      <main>
        <p>Hello</p>
      </main>
    </div>
  );
}

export default App;
