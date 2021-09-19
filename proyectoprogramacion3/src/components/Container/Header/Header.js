import React, {Component} from 'react';
import './header.css'


class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: '',
            vista: 'row'
        }
    }

<<<<<<< HEAD
        
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
=======
    enviarSubmit(e){
>>>>>>> 0fbaeca7a573dd61e374962f924aef084dd2c9f2
        e.preventDefault()
    }

    controlCambios(e){
        this.setState({
            
            value: e.target.value
        }, ()=>this.props.filtrarAlbums(this.state.value))

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
<<<<<<< HEAD
                {/* no arreglamos lo que dijo sebas de que hay que pasarle el evento */}
                <form onSubmit={(e) => this.envitarSubmit()} className='navbarForm'action="">

=======
            <form onSubmit={(e) => this.enviarSubmit()} className='navbarForm'action="">
>>>>>>> 0fbaeca7a573dd61e374962f924aef084dd2c9f2
                <input className="searchTerm"type="text" name="search" id="" placeholder="Search" onChange={(e)=> this.controlCambios(e)} value={this.state.value} />
                {/* <button className="searchButton" type="submit" href="#"><img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg' alt='' className="lupita"></img></button> */}
            </form>
        </div>
      
        </nav>
    )}

}

<<<<<<< HEAD
export default Header


=======
export default Header
>>>>>>> 0fbaeca7a573dd61e374962f924aef084dd2c9f2
