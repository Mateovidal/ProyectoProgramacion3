import React from 'react';

function Navbar() {

    return (
        <nav className="navbar">
            <h2 className="navbarTitle">Chumlify</h2>
        <section className='navbarSection'>
            <p className="navbarItem1">Ordenar ASC/ DESC</p>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" className="navbarItem2"></img>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" className="navbarItem2"></img>
            <form className='navbarForm'action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit" ><img src='https://stackoverflow.com/questions/19945281/html-button-with-search-icon' className="lupita"></img></button>
            </form>
        </section>
        </nav>
    
    )

}

export default Navbar
