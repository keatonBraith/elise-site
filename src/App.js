import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import routes from './routes';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
        {routes}
      <Footer />
    </div>
  );
}

export default App;
