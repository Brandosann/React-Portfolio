import React from 'react';
import './App.scss';
import Main from './components/Main';
import Header from './components/Header';
import Section from './components/Section';
import Works from './components/Works';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Section/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App; 