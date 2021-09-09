import React, { Component } from 'react';
import Card from './Card/Card'

class Album extends Component {
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
        .then((data) => {
            console.log(data);
            this.setState({
                albums : data.data,
                // nexturl: data.data.next, ver que onda eso
            })
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <>
              
                {this.state.albums.map((album) => (
                    <Card key={album.id} datosAlbum={album} />

                ))}    

            </>
        )
    }
}

export default Album;