import React from 'react'
import './card.css'

function Card(props){
    console.log(props);

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
                    <img src="./img/image-default.png" alt=""></img>
                    <h3>{props.datosAlbum.title}</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="http://localhost:3001">Ver más</a>
                
                </main>
                </article>
        </>
    );

}

export default Card