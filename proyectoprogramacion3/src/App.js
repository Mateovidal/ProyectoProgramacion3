import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

 function App () {



return (

// en el contenido principal incluyo el header
    <div id="content">
         <nav><Navbar/></nav>
       <Header /> 
       <Footer/>

    </div>


    )   

}



export default App;


