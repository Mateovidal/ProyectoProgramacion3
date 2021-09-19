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

render(){

        return (

            <>

            <Header filtrarAlbums={(param)=> this.filtrarAlbums(param)}/> 
            <Main />

            </>
          
        
        )
    }
    
}
    
export default Container
