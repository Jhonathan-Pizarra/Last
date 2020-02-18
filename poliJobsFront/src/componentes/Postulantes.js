import React , {Component} from 'react';
import { Link } from 'react-router-dom';
class Postulantes extends Component {

    state = { arr: []  }

    async componentDidMount(){
        const items = await fetch('https://tupaginaonline.net/api/games/v1');
        const dataItems = await items.json();
        console.log(dataItems);
        this.setState({arr:dataItems});
    }


    render(){
        return (
            <div className="container">
                <div className="row pt-5">
                    {this.state.arr.map(i => {
                        return(
                            <div className="col-md-4 pt-5" key={i.id}>
                                <div className="card">
                                    <div className="card-header">{i.nombre}</div>
                                    <div className="card-footer">
                                        <Link className="btn btn-primary text-white" to={`/btnpostulantes/${i.id}`}>Ver Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Postulantes;