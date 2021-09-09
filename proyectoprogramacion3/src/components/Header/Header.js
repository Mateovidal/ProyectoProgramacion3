import React from 'react';
import './header.css'

function Header() {

    return (
        <nav className="navbar">
            <h2 className="navbarTitle">Chumlify</h2>
        <section className='navbarSection'>
            <p className="navbarItem1">Ordenar ASC/ DESC</p>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
            <img src="https://img.flaticon.com/icons/png/512/81/81484.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt='' className="navbarItem2"></img>
            <form className='navbarForm'action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit" ><img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg' alt='' className="lupita"></img></button>
            </form>
        </section>
        </nav>
    
    )

}

export default Header
