import React, { Component } from 'react';
import Album from './Album/Album'
import './main.css'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            // nextUrl : "",
        }}


componentDidMount(){
    console.log("componentDidMount");
}        

// con el next le estoy diciendo que sea pag 
// 1 , 2 3 etc. le tengoq ue explicar a mi componente que puedo estar cargando 
// 1 2 3 4 5 paginas va a atener distintas cargas habria que redifinir el estado, ya que 
// necesiuto algo que me diga en que condicion estoy


// creamos el metodo agregarCards
agregarCards(){


            let url = this.state.nextUrl;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({

        
                        // personajes: this.state.personajes.concat(data.results),
                        // nextUrl: data.info.next,  //Para tener la página siguiente.
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }

        // pasarle desde app propiedades a main
     
    
render(){
    return (

    <main>

        {/* para llamar a un metodo como estamos hablando del propio componente usamos this. y el nombre del metodo agregarCards */}
        <button onClick={()=>this.agregarCards()} className="agregarCards"> Add Cards</button>
        <section className='card-container'>

            <Album />

        </section>

    </main>
    )


}
}


export default Main
