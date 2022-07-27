import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
