import React from 'react'
import './card.css'

function Card(props){
    console.log(props);
    const {title, cover_big, artist, record_type, link, id} = props.datosAlbum

    return(
        <>
            <article className='card'>

                <section className="navigation">
                    <div>
                        <i className="item1"></i>
                        <i className="item2"></i>
                    </div>
                    <button className="borrarCard" onClick={() => props.borrar(id)}>Borrar</button>           
                    
                     </section>

                <main>
                    <img className='img' src={cover_big} alt=""></img>
                    <h3>{title}</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditional-info">
                        <p>{artist.name}</p>
                        <p>{record_type}</p>
                        <a href={link}>Link al Album</a>
                        {/* <button>Link al album</button> */}
                    </section>
                    <a href="http://localhost:3001">Ver más</a>
                </main>

            </article>
        </>
    );

}

export default Card;