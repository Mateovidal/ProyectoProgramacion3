import React from 'react';
import Album from './Album/Album'
import './main.css'

function Main() {

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


export default Main
