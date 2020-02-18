import React from 'react';
import {Card, List, Avatar, Icon, Row, Col} from 'antd';
import CVitae from "../styles/CVitae.css";
import epn from "../images/epn.jpg";
import logo from "../images/logo.jpg";
import Curriculum from '../services/hojasVida';

//El tag de la izquierda:
const listData = [];
{
    this.state.arrCV.map((item, index) => (
        listData.push({
            href: 'http://ant.design',
            title: "item.nombreCompleto" ${index},
            avatar: {epn},
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        })
    ))
}

/*
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `Analista de sitemas informaticos ${i}`,
        avatar: {epn},
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
*/
//Imagen
const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

class MostrarCV extends React.Component {
    state = {
        tempArrCV: [],
        arrCV: []
    }


    /*
    async componentDidMount() {
        const {tempArrCV, arrCV} = this.state;
        this.setState({tempArrCV: await Curriculum.getHojas()})
        this.setState({arrCV: tempArrCV['hydra:member']});
        console.log('listo', arrCV);
    }
    */

    render() {
        const {arrCV} = this.state;
        return (
            <div className="Mostrar">

                <h1>Busca el camarada ideal!</h1>
                <h3>Hojas de vida: </h3>

                <Row>
                    <Col span={12} offset={6} className="HojasVid">
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{onChange: page => { console.log(page); }, pageSize: 3,}}
                            dataSource={listData}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={item => (
                                <List.Item key={item.title} actions={[
                                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                        <IconText type="message" text="2" key="list-vertical-message" />,
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src={logo}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />,

                    </Col>
                </Row>




                {/*
                {this.state.arrOfertas.map((item, index) => (
                    <div>
                        <h5>{item.NombreEmpresa}</h5>
                        <h5>{item.Conocimientos}</h5>
                        <h5>{item.Salario}</h5>
                    </div>
                ))}
                */}

            </div>
        )

    }

}

export default MostrarCV;