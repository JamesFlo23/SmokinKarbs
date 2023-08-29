import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
      <button className='btn-light btn-lg'><FontAwesomeIcon icon={faListSquares} />Click</button>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
