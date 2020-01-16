import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style.css'


function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;