import './App.css';
import React from 'react'
import Items from './components/Items';
import axios from "axios";

const handlerButton = (async()=>{await axios.get('/api/tasks')
  .then(function (response) {
    console.log(response.data);
  });
})

export default class App extends React.Component {
render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo it!</h1>
        <button onClick={handlerButton}>Load data</button>
        <Items />
      </header>
      <footer className="App-footer">
        <p>2023 Portsmouth</p>
      </footer>
    </div>
  );
}
}