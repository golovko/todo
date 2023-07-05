import './App.css';
import ItemsList from './components/ItemsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Do it!</h1>
        <ItemsList />
      </header>
      <footer className="App-footer">
        <p>2023 Portsmouth</p>
      </footer>
    </div>
  );
}

export default App;
