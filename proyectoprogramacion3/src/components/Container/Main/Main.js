import React, { Component } from 'react';
import Card from './Card/Card'
import './main.css'




class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: [],
            filtrados: []
            
           
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
                filtrados: this.props.albumsAMostrar,
                // nextUrl: data.data.next, ver que onda eso
                nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=12"
            })
        })
        .catch(e => console.log(e))
    }

    componentDidUpdate(){
        console.log('component did update');
    }



   



    render() {
       
        let contenido;

        if (this.props.albumsAMostrar == "") {
            contenido = <iframe src="https://giphy.com/embed/3AMRa6DRUhMli" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                       console.log("LOADING...");
        }
        else  if (this.props.albumsAMostrar == "") {
            contenido = <p> NO HAY RESULTADOS PA </p>
            console.log("LOADING...");
        }
        else{
            contenido =   <section className='card-container'>
            {/* queremos que se mapee el filtrados para que muestre nada mas los que queremos y no todos */}
                  {this.props.albumsAMostrar.map((album) => (
                      <Card 
                      key={album.id} 
                      datosAlbum={album} 
                      borrar = {this.props.borrarTarjeta} />

                  ))}

              </section>
        };

       
       

        console.log(contenido);

        return (

            

            <>

                {/* <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} /> */}
               
                {contenido}
              
                <button onClick={this.props.agregarTarjetas} className="agregarCards"> Add Cards</button>

            </>
        )
    }
}

export default Main;