import React, {Component} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';


class Container extends Component {

    constructor(){
        super()

        this.state = {
            albums: [],
            filtrados: [],
            resultadosSearch: true,
            cargando: true,
            vista: 'row',
            contador: 0
        }
    }

    componentDidMount(){
        console.log('componentDidMount');

        
            const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=12";
          
            fetch(url)
            .then((respuesta) => respuesta.json())
            
           
            .then((data) => {
                console.log(data);



    this.setState({
        albums: data.data,
        filtrados: data.data,
        contador: data.data[data.data.length-1].position,
        cargando: false,
        vista: this.state.vista
    })
    
  
    ;

               
       console.log(this.state.cargando);
            })
            
            .catch(e => console.log(e))
    }
      
    componentDidUpdate(){
        console.log('component did update');
    }
      
      
      
    filtrarAlbums(textoFiltrar){
        
        let albumsFiltrados = this.state.albums.filter(album => album.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
        
        if (albumsFiltrados.length !== 0) {
            this.setState({
                
                filtrados: albumsFiltrados,
                
                resultadosSearch: true,
    
              })  
        }
        else {
            this.setState({
                resultadosSearch:false  
            })
            
        }

            
    }

    agregarCards(){
        // let newIndex = this.state.filtrados.length
        console.error(this.state.contador);
        let newIndex = this.state.contador
        const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=" + newIndex + "&limit=10";
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            this.setState({

                albums: this.state.filtrados.concat(data.data),
                filtrados: this.state.filtrados.concat(data.data),
               
                contador: this.state.contador + 12
                
            }); console.log(this.state.contador);
        })
        .catch(function(e){
            console.log(e);
        })
    }


    borrarTarjeta (id){
        console.log(id);

        const resto = this.state.filtrados.filter((album) => album.id !== id)
    
        this.setState({
            albums: resto,
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

       
        
        return (

            <>

            <Header 
            filtrarAlbums={(param)=> this.filtrarAlbums(param)} 
            orientarCardsColumn={()=> this.cambiarColumn()} 
            orientarCardsRow={()=> this.cambiarRow()} /> 
            
            <Main 
            orientacionAMostrar={this.state.vista} 
            agregarTarjetas={()=>this.agregarCards()} 
            borrarTarjeta={(albumBorrar)=>this.borrarTarjeta(albumBorrar)} 
            resultadosSearch={this.state.resultadosSearch}
            albumsAMostrar={this.state.filtrados}
            cargando={this.state.cargando} />
    
            
            </>

        )
    }
    
}
    
export default Container
