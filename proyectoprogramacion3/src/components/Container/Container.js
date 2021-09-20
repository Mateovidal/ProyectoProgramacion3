import React, {Component} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';


class Container extends Component {

    constructor(){
        super()

        this.state = {
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
                nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=12",
                vista: this.state.vista
            })
        })
        .catch(e => console.log(e))
}
      
componentDidUpdate(){
        console.log('component did update');
}
      
      
// El metodo filtrarAlbums, el encargado de la logica detras de nuestro seacrh bar   
filtrarAlbums(textoFiltrar){

          let albumsFiltrados = this.state.albums.filter(album => album.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
          
          this.setState({
              filtrados: albumsFiltrados
          })
}



 //el metodo agregarCards
 agregarCards(){
    let newIndex = this.state.albums.length
    const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index="+ newIndex +"&limit=10";
     fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);

            this.setState({

                filtrados: this.state.filtrados.concat(data.data),
               
            })
        })
        .catch(function(e){
            console.log(e);
        }
    )
}



borrarTarjeta (id){
    console.log(id);

    const resto = this.state.filtrados.filter( album => album.id !== id)
    
    this.setState({
        filtrados: resto
    })
}


cambiarRow(){

        this.setState({
            vista: 'row'
        })
}

cambiarColumn() {

    this.setState({
        vista: 'column'
    })
}


render(){

    console.log(this.state.vista)

        return (

            <>

            <Header 
            orientarCardsColumn={()=> this.cambiarColumn()} 
            orientarCardsRow={()=> this.cambiarRow()} 
            filtrarAlbums={(param)=> this.filtrarAlbums(param)}/> 

            <Main 
            orientacionAMostrar={this.state.vista} 
            agregarTarjetas={()=>this.agregarCards()} 
            borrarTarjeta={(albumBorrar)=>this.borrarTarjeta(albumBorrar)} 
            albumsAMostrar={this.state.filtrados}/>

            </>
          
        
        )
    }
    
}
    
export default Container
