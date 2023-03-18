//import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  //const title = 'Welcome to the new blog';
  //const likes = 50;
  //const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        {/* <h1>{ title }</h1> */}
        <h1>App Component</h1>
        <Home />
        {/* <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "Hello" }</p>
        <p>{ Math.random() * 20 }</p>
        <a href= {link}>Google Site</a> */}

      </div>
    </div>
  );
}

export default App;
