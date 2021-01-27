import React from 'react';
import NavBar from './components/Navbar';
import routes from './routes';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
        {routes}
    </div>
  );
}

export default App;
