import Image from 'next/image';
import Items from './components/Items'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>ToDo it!</h1>
      </header>
      <main>
      <Items />
      </main>
      <footer className="App-footer">
        <p>2023 Portsmouth</p>
      </footer>
    </div>
  )
}
