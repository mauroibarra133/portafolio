import "./App.css";
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return <div className="app-container">
    <Nav/>
    <div className="body">
      <Hero></Hero>
    </div>
  </div>;
}

export default App;
