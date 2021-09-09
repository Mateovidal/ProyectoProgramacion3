import React from 'react'
import './card.css'

function Card(props){
    console.log(props);
    const {cover, title,cover_big,artist, record_type, link} = props.datosAlbum

    return(
        <>
            <article className='card'>
                <section className="navigation">
                    <div>
                        <i className="item1"></i>
                        <i className="item2"></i>
                    </div>
                    <i className="item3"></i>
                </section>
                <main>
                    <img className='img' src={cover_big} alt=""></img>
                    <h3>{title}</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditional-info">
                        <p>{artist.name}</p>
                        <p>{record_type}</p>
                        <p><a href={link}>Link al Album</a></p>
                    </section>
                    <a href="http://localhost:3001">Ver más</a>
                    <button className="borrarCard">Delete</button>
                
                </main>
                </article>
        </>
    );

}

export default Card;