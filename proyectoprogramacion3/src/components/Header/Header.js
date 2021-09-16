import React from 'react';

import './header.css'

// import Search from '../Main/Album/Search/Search';

function Header() {

    return (
      
        <nav className="navbar">
            <h2 className="navbarTitle">FIJI</h2>
        <section className='navbarSection'>
            <p className="navbarItem1">Ordenar ASC/ DESC</p>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
            {/* <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} /> */}
        </section>
      
        </nav>
        
 
    
    )

}

export default Header


// import React, { Component } from 'react'

// class Header extends Component {

//     constructor() {
//         super()
//         this.state = {
//             albums: [],
//         }
//     }


//     filtrarAlbums(){

//     }

//     render() {
//         return (
//             <>
//                 <nav className="navbar">
//                     <h2 className="navbarTitle">Chumlify</h2>

//                     <section className='navbarSection'>
//                         <p className="navbarItem1">Ordenar ASC/ DESC</p>
//                         <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
//                         <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
//                         <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} />
//                     </section>
//                 </nav>
                
//             </>
//         )
//     }
// }

// export default Header