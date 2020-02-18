import React from 'react';
 import {Button} from 'antd';
import Ofertas from '../services/ofertas';
import MenuSup from '../componentes/MenuSup';


class Showofert extends React.Component{
    state={
        tarrOfertas:[],
        arrOfertas:[]
    }
    
    async componentDidMount(){
        this.setState({tarrOfertas: await Ofertas.getOferta()})
        this.setState({arrOfertas: this.state.tarrOfertas['hydra:member']});
        console.log('listo' , this.state.arrOfertas);
    }

    render(){
    return(
    <div>
        
        <h1>Bienvenido!</h1>
        <h3>OFERTAS</h3>
        {this.state.arrOfertas.map((item,index)=>(
            <div>
            <h5>{item.NombreEmpresa}</h5>
            <h5>{item.Conocimientos}</h5>
            <h5>{item.Salario}</h5>
            </div>
        ))}
        
    </div>
    )
    
    }
    
}

export default Showofert; 