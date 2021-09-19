import React, {Component} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';



// import Search from '../Main/Album/Search/Search';

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
                // nextUrl: data.data.next, ver que onda eso
                nextUrl: "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=12",
                vista: 'row'
            })
        })
        .catch(e => console.log(e))
}
      
componentDidUpdate(){
        console.log('component did update');
}
      
      
      
filtrarAlbums(textoFiltrar){
          let albumsFiltrados = this.state.albums.filter(album => album.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
          // console.log(albumsFiltrados);
          this.setState({
              filtrados: albumsFiltrados
          })
}

 // creamos el metodo agregarCards
 agregarCards(){
    let newIndex = this.state.albums.length 
    const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index="+ newIndex +"&limit=10";
    // this.setState({
    //     limit: this.state.limit + 1
    // })
     fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            this.setState({
                // le pedimos que meta los albumes que agrega en filtrados y en albums,
                // para que ambas listas coincidan
                albums: this.state.albums.concat(data.data),
               
                filtrados: this.state.filtrados.concat(data.data),
               
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

// le pedimos que filtre no de albums, sino de filtrados
//y luego mete las tarjetas que quedan (las que no fueron borradas) dentro de filtrados
//filtrados es lo que se renderiza

borrarTarjeta (id){
    console.log(id);

    const resto = this.state.filtrados.filter( album => album.id !== id)
    
    this.setState({
        filtrados: resto
    })
}


cambiarRow(){
    console.log(this.state.vista)

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

    let orientacion;

    if(this.state.vista == 'row'){
        orientacion = ()=>this.cambiarRow()
    }
    else {
        orientacion = ()=>this.cambiarColumn()
    }

        return (

            <>

            <Header cambiarOrientacion={orientacion} filtrarAlbums={(param)=> this.filtrarAlbums(param)}/> 
            <Main agregarTarjetas={()=>this.agregarCards()} borrarTarjeta={(albumBorrar)=>this.borrarTarjeta(albumBorrar)} albumsAMostrar={this.state.filtrados}/>

            </>
          
        
        )
    }
    
}
    
export default Container
