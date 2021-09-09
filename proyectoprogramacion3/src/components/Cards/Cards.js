import React, { Component } from 'react';
// importar albumes


class Card extends Component {
    render() {
            return (
                <div>
        
                    <section className="navigation">
                        <div>
                            <p>Esto es Card </p>
                            <i className="fas fa-chevron-left"></i>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <i className="far fa-window-close"></i>
                    </section>
                    <main>
        
                    {/* aca citamos a los componentes de albums*/}        
        
        
                    </main>
        
                </div>
            )
        }
   
}

export default Card;



// 

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