import React, {Component} from 'react';
import './header.css'


class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: '',
        }
    }

    // enviarSubmit(e){
    //     e.preventDefault()
    // }

    controlCambios(e){
        this.setState(
            {value: e.target.value},
            ()=>this.props.filtrarAlbums(this.state.value)
        )
    }

    render(){
    return (

        <nav className="navbar">
            <h2 className="navbarTitle">FIJI</h2>

            <section className='navbarSection'>
                <button className="ascending">ASC</button>
                <button className="descending">DES</button>
                <button onClick={this.props.orientarCardsRow} className="orden1">Row</button>
                <button onClick={this.props.orientarCardsColumn} className="orden2">Column</button>
            </section>

            <div className= "search">
                <form className='navbarForm'action="">
                    {/* onSubmit={(e) => this.enviarSubmit()}  */}

                    <input 
                        onChange={(e)=>this.controlCambios(e)}
                        value={this.state.value} className="searchTerm" type="text" name="search" id="" placeholder="Search" 
                    />

                    {/* <button className="searchButton" type="submit" href="#"><img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg' alt='' className="lupita"></img></button> */}
                </form>
            </div>
        </nav>
    )}

}

export default Header