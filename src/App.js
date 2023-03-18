//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        {/* <h1>App Component</h1> */}
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "Hello" }</p>
        <p>{ Math.random() * 20 }</p>
        <a href= {link}>Google Site</a>

      </div>
    </div>
  );
}

export default App;
