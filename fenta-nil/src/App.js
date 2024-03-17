import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Solution from './components/Solution';
import WhyItMatters from './components/WhyItMatters';
import Overview from './components/Overview';
import TheTeam from './components/TheTeam';
import Acheivements from './components/Acheivements';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Solution />
        <Overview />
        <WhyItMatters />
        <TheTeam />
        <Acheivements />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
