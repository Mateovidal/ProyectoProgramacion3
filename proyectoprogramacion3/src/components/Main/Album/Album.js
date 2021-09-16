import React, { Component } from 'react';
import Card from './Card/Card'
import Search from './Search/Search'
import './album.css'




class Album extends Component {
    constructor(){
        super();
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
                   
                    filtrados: this.state.albums.concat(data.data),
                   
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

    filtrarAlbums(textoFiltrar){
        let albumsFiltrados = this.state.albums.filter(album => album.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
        // console.log(albumsFiltrados);
        this.setState({
            filtrados: albumsFiltrados
        })
    }

    render() {
       
        let contenido;

        if (this.state.albums == "") {
            contenido = <p> LOADING... </p>
            console.log("LOADING...");
        }
        else  if (this.state.filtrados == "") {
            contenido = <p> NO HAY RESULTADOS PA </p>
            console.log("LOADING...");
        }
        else{
            contenido =   <section className='card-container'>
            {/* queremos que se mapee el filtrados para que muestre nada mas los que queremos y no todos */}
                  {this.state.filtrados.map((album) => (
                      <Card 
                      key={album.id} 
                      datosAlbum={album} 
                      borrar = {(albumBorrar)=>this.borrarTarjeta(albumBorrar)} />

                  ))}

              </section>
        };

       
       

        console.log(contenido);

        return (

            

            <>

                <Search filtrarAlbums={(param)=> this.filtrarAlbums(param)} />

                {contenido}
              
                <button onClick={()=>this.agregarCards()} className="agregarCards"> Add Cards</button>

            </>
        )
    }
}

export default Album;