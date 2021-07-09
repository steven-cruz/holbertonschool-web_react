import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="Title">School dasboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dasboard</p>
      </div>

      <div className="App-footer">
        <p><i>Copyright 2020 - holberton School</i></p>
      </div>
    </div>
  );
}

export default App;
