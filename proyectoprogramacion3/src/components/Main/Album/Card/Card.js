import React, { Component } from 'react'
import './card.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            text:'Ver más',
            selected: false,

        }
    };
    
    
   
    // const {title, cover_big, artist, record_type, link, id} = props.datosAlbum

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } 
        
        else {
            this.setState({
                viewMore: true,
                text: 'Ver Menos'
            })            
        }
    };

  
    render () {
        console.log(this.props);
         return(
        <>
            <article className='card'>

                <section className="navigation">
                    <div>
                        <i className="item1"></i>
                        <i className="item2"></i>
                    </div>
                    <button className="borrarCard" onClick={() => this.props.borrar(this.props.datosAlbum.id)}>Borrar</button>           
                    
                     </section>

                <main>
                    <img className='img' src={this.props.datosAlbum.cover_big} alt=""></img>
                    <h3>{this.props.datosAlbum.title}</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className="aditionalInfo">
                        <div className="infoArtistSection">
                             <img className="imageArtist" src={this.props.datosAlbum.artist.picture_medium} alt=""></img>
                            <p className="nameArtist">{this.props.datosAlbum.artist.name}</p>
                        </div>
                        <p className={`hide ${this.state.viewMore ? 'show' : 'hide'}`}>{this.props.datosAlbum.record_type}</p>
                        <a className={`hide ${this.state.viewMore ? 'show' : 'hide'}`} href={this.props.datosAlbum.artist.link}>Artist Profile</a>
                        <a className={`hide ${this.state.viewMore ? 'show' : 'hide'}`} href={this.props.datosAlbum.link}>Album Info</a>
                        
                    </section>
                    <button className='more' onClick={()=>this.viewMore()}>{this.state.text}</button>

                </main>

            </article>
        </>
         )
    };

}

export default Card;