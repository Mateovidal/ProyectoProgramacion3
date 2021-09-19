import React from 'react';

import './header.css'

// import Search from '../Main/Album/Search/Search'


function Header() {

    return (
      
        <nav className="navbar">
            <h2 className="navbarTitle">FIJI</h2>
        <section className='navbarSection'>
            
            <button className="ascending">ASC</button>
            <button className="descending">DES</button>

            <button className="orden1">Orden 1</button>
            <button className="orden2">Orden 2</button>
            {/* <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} /> */}
        </section>
      
        </nav>
        
 
    
    )

}

export default Header;