import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style.css'
function App() {
  return (
    <div className="App container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;