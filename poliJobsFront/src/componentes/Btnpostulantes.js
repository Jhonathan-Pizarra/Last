import React, { Component } from 'react';

class Btnpostulantes extends Component {
    state={ post: '' }
    async componentDidMount(){
        const item = await fetch(`https://tupaginaonline.net/api/games/v1/${this.props.match.params.id}`);
        const dataItem = await item.json();
        this.setState({ post: dataItem[0] });
    }
    render() {
        const {nombre , plataforma , ano , genero } = this.state.post;
        return (
            <div className="container text-center pt-5">
                <div className="row card col-md-4 mx-auto">Ficha Técnica: <b>{nombre}</b></div>
                <div className="row card col-md-4 mx-auto">Plataforma: <b>{plataforma}</b></div>
                <div className="row card col-md-4 mx-auto">Ano: <b>{ano}</b></div>
                <div className="row card col-md-4 mx-auto">Genero: <b>{genero}</b></div>
            </div>
        )

    }
}

export default Btnpostulantes;