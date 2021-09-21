import React, { Component } from 'react';
import Card from './Card/Card'
import './main.css'


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    
    render() {
       
        let contenido;

        if (this.props.resultadosSearch === false || this.props.albumsAMostrar == "") {
            contenido = <p className='noResultados'> NO HAY RESULTADOS PARA SU BUSQUEDA </p>
            console.log("NO HAY RESULTADOS");
        }

        else if (this.props.cargando === true) {
            contenido = <iframe src="https://giphy.com/embed/3AMRa6DRUhMli" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            console.log("LOADING...");
        }

        else {
            contenido = 
            <section className={this.props.orientacionAMostrar}>
                    {/* queremos que se mapee el filtrados para que muestre nada mas los que queremos y no todos */}
                {this.props.albumsAMostrar.map((album) => (

                      <Card 
                      
                      key={album.id} 
                      datosAlbum={album} 
                      borrar = {this.props.borrarTarjeta} />

                ))}

            </section>
        }

        return (
            <>
               
                {contenido}
              
                <button onClick={this.props.agregarTarjetas} className="agregarCards"> Add Cards</button>

            </>
        )
    }
}

export default Main;