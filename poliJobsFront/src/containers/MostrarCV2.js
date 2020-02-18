import React from 'react';
import { List, Card, Button } from 'antd';
import Curriculum from "../services/hojasVida";


class MostrarCV2 extends React.Component{
    state={
        tempArrCV2:[],
        arrCV2:[]
    }

    async componentDidMount(){
        this.setState({tempArrCV2: await Curriculum.getHojas()})
        this.setState({arrCV2: this.state.tempArrCV2['hydra:member']});
        console.log('listo' , this.state.arrCV2);
    }

    render(){
        const {arrCV2} = this.state;
        return(
            <div>

                <h1>Bienvenido!</h1>
                <h3>OFERTAS</h3>
                {arrCV2.map((item,index)=>(
                    <div>
                        <h5>{item.nombreCompleto}</h5>
                        <h5>{item.universidad}</h5>
                        <h5>{item.sexo}</h5>
                    </div>
                ))}

                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>Card content</Card>
                        </List.Item>
                    )}
                />,

                <div className="task-cards">
                    {
                        this.state.cards.map((item, index) => (
                            <Card key={`card-${index}`} title={item.nombre} bordered={true} style={{width: 300}}>{item.descripcion}</Card>
                        ))
                    }
                </div>


            </div>
        )

    }

}

export default MostrarCV2;