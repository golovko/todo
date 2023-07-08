import './App.css';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo it!</h1>
        <Items />
      </header>
      <footer className="App-footer">
        <p>2023 Portsmouth</p>
      </footer>
    </div>
  );
}

export default App;
