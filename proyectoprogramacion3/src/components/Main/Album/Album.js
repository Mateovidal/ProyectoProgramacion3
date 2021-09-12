import React, { Component } from 'react';
import Card from './Card/Card'

class Album extends Component {
    constructor(){
        super()
        this.state = {
            albums: [],
            nextUrl: ""
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=10";
        // &top?limit=10
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
            this.setState({
                albums: data.data,
                // nextUrl: data.data.next, ver que onda eso
                nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=10"
            })
        })
        .catch(e => console.log(e))
    }

    componentDidUpdate(){
        console.log('component did update');
    }



    // creamos el metodo agregarCards
    agregarCards(){
        let url = this.state.nextUrl;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                this.setState({

                    albums: this.state.albums.concat(data.data),
                    nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=10"
                        // con el next le estoy diciendo que sea pag 
// 1 , 2 3 etc. le tengoq ue explicar a mi componente que puedo estar cargando 
// 1 2 3 4 5 paginas va a atener distintas cargas habria que redifinir el estado, ya que 
// necesiuto algo que me diga en que condicion estoy
                })
            })
            .catch(function(e){
                console.log(e);
            }
        )
    }

    borrarTarjeta (id){
        console.log(id);

        const resto = this.state.albums.filter( album => album.id !== id)
        
        this.setState({
            albums: resto
        })
    }



    render() {
        return (
            <>
            
                <section className='card-container'>
              
                    {this.state.albums.map((album) => (
                        <Card 
                        key={album.id} 
                        datosAlbum={album} 
                        borrar = {(albumBorrar)=>this.borrarTarjeta(albumBorrar)} />

                    ))}

                </section>

                <button onClick={()=>this.agregarCards()} className="agregarCards"> Add Cards</button>

            </>
        )
    }
}

export default Album;