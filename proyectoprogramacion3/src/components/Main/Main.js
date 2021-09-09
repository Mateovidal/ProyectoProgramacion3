import React, { Component } from 'react';
import Album from './Album/Album'
import './main.css'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            nextUrl : "",
        }}


componentDidMount(){
    console.log("componentDidMount");
}        

agregarCards(){
            let url = this.state.nextUrl;
    
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        // personajes: this.state.personajes.concat(data.results),
                        nextUrl: data.info.next,  //Para tener la página siguiente.
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }

        // pasarle desde app propiedades a main
        // 
    
render(){
    return (

    <main>
        <button onClick={()=>this.agregarCards()} className="agregarCards"> Add Cards</button>
        <section className='card-container'>

            <Album />

        </section>

    </main>
    )


}
}


export default Main
