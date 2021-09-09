import React, { Component } from 'react';
// importar albumes


class Card extends Component {
    constructor(){
        super()
        this.state = {
            albums : [],
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10";
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then( data => {
            console.log(data);
            this.setState({
                albums : data.data
            })
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <>
                <article className='card'>
                <section className="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""></img>
                    <h3>Título/ Nombre</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                
                </main>
                </article>

                {/* aca citamos a los componentes de albums*/}        



            </>
        )
    }
}

export default Card;





// function Cards() {

//     return (
//         <div>
//             <div className="scene">
//                 <div className="items items-1"></div>
//             </div>
//             <div className="scene">
//                 <div className="items items-2"></div>
//             </div>
//             <div className="scene">
//                 <div className="items items-3"></div>
//             </div>
//             <div className="scene">
//                 <div className="items items-4"></div>
//             </div>
//             <div className="scene">
//                 <div className="items items-5"></div>
//             </div>
//         </div>
//     )

// }

// export default Cards