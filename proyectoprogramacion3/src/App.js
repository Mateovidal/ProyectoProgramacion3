import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App () {
  
  return (
// en el contenido principal incluyo el header
    <div id="content">

      <Header /> 
      <Main />
      <Footer/>

    </div>

  )   
}


export default App;


