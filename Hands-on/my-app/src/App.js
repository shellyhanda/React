import React from 'react';
import './App.css';
import Footer from './AppComponents/Footer'
import Header from './AppComponents/Header'
import MainContent from './AppComponents/MainContent'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
