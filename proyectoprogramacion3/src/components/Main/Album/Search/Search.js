import React, { Component } from 'react'
import './search.css'

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: ''
        }
    }

    enviarSubmit(e){
        e.preventDefault()
    }

    controlCambios(e){
        this.setState({
            value: e.target.value
        }, ()=>this.props.filtrarAlbums(this.state.value))
        // console.log(e.target.value);

    }

    render() {
        return (
           
            <div className= "search">
                <form onSubmit={(e) => this.enviarSubmit()} className='navbarForm'action="">
                <input className="searchTerm"type="text" name="search" id="" placeholder="Search" onChange={(e)=> this.controlCambios(e)} value={this.state.value} />
                <button className="searchButton" type="submit" href="#"><img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg' alt='' className="lupita"></img></button>
               
            </form>
            </div>
           
        )
    }
}

export default Search;