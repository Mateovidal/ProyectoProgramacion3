import React, {Component} from 'react';

import './header.css'

// import Search from '../Main/Album/Search/Search';

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: '',
            albums: [],
            filtrados: [],
            vista: 'row'
        }
    }

        
    componentDidMount(){
        console.log('componentDidMount');
        const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=12";
        // &top?limit=10
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
            this.setState({
                albums: data.data,
                filtrados: data.data,
                // nextUrl: data.data.next, ver que onda eso
                nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=12"
            })
        })
        .catch(e => console.log(e))
    }

    envitarSubmit(e){
        e.preventDefault()
    }

    controlCambios(e){
        this.setState({
            
            value: e.target.value
        }, ()=>this.props.filtrarAlbums(this.state.value))
        // console.log(e.target.value);

    }



    render(){

    return (
      
        <nav className="navbar">
            <h2 className="navbarTitle">FIJI</h2>
        <section className='navbarSection'>
            
            <button className="ascending">ASC</button>
            <button className="descending">DES</button>

            <button onClick={this.props.orientarCardsRow} className="orden1">Row</button>
            <button onClick={this.props.orientarCardsColumn} className="orden2">Colum</button>
            {/* <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} /> */}
        </section>

        <div className= "search">
                {/* no arreglamos lo que dijo sebas de que hay que pasarle el evento */}
                <form onSubmit={(e) => this.envitarSubmit()} className='navbarForm'action="">

                <input className="searchTerm"type="text" name="search" id="" placeholder="Search" onChange={(e)=> this.controlCambios(e)} value={this.state.value} />
                <button className="searchButton" type="submit" href="#"><img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg' alt='' className="lupita"></img></button>
               
            </form>
        </div>
      
        </nav>
        
 
    
    )
    }

}

export default Header


