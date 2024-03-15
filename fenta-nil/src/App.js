import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TheTeam from './components/TheTeam';
import Background from './components/Background';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css'; // Custom theme overrides

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <TheTeam />
        <Background />
      </main>
      <Footer />
    </>
  );
}

export default App;
