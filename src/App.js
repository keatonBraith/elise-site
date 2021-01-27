import React from 'react';
import NavBar from './components/Navbar';
import routes from './routes';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
        {routes}
      <Footer />
    </div>
  );
}

export default App;
