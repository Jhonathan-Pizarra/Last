import React, {Component} from "react";
import {Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Avatar, Card} from 'antd';
import '../styles/CVitae.css';
import gnr from '../images/foto.jpg';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }

    //Funciones
    handleChange = value => {
        this.setState({
            dataSource:
                !value || value.indexOf('@') >= 0
                    ? []
                    : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
    };

    render() {
        const {Option} = Select;
        const {TextArea} = Input;

        return (

            <div className="Perfil">

                {/*Foto*/}
                <div className="Foto">
                    <Row>
                        <Col span={12}>
                            <Avatar size={120} src={gnr}/>

                        </Col>
                    </Row>
                </div>

                <br/>
                {/*Nombres y Apellidos*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="fullName">Nombres y Apellidos: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" value="propNombre"
                               onChange={this.handleFullNameChange} name="fullName" placeholder="Jhonathan"/>
                    </Col>
                </Row>

                <br/>

                {/*Contraseña*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="password">Contraseña: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Password style={{width: '31%'}} placeholder="SalsaDeTomate123: " name="password"/>
                    </Col>
                </Row>

                <br/>

                {/*Telefono*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="phone">Telefono: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group name="phone">
                            <Input style={{width: '7%'}} defaultValue="+593"/>
                            <Input style={{width: '13%'}} placeholder="0990803132"/>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Correo*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="mail">Correo electrónico: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact>
                            <AutoComplete
                                dataSource={this.state.dataSource}
                                style={{width: '31%'}}
                                onChange={this.handleChange}
                                placeholder="jhonathan@email.epn.edu.ec"
                                name="mail"
                            />
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Fecha Nacimiento*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="Date">Fecha de Nacimiento: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact name="Date">
                            <DatePicker style={{width: '31%'}} placeholder="19/11/1996"/>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Sexo*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="sexo">Sexo: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact name="sexo">
                            <Select defaultValue="Masculino">
                                <Option value="M">Masculino</Option>
                                <Option value="F">Femenino</Option>
                            </Select>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Carrera*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="carrer">Carrera: </label>
                    </Col>
                    <Col span={21}>
                        <Input.Group compact name="carrer">
                            <Select defaultValue="ASI">
                                <Option value="ASI">ASI</Option>
                                <Option value="ASA">ASA</Option>
                                <Option value="ET">ET</Option>
                                <Option value="EM">EM</Option>
                            </Select>
                            <label htmlFor="semester"> Semestre: </label>
                            <InputNumber
                                type="text"
                                style={{width: '4%'}}
                                onChange={this.handleFullNameChange}
                                name="semester"
                            />
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Direccion*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="address">Direccion </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact name="address">
                            <Cascader style={{width: '31%'}} placeholder="EPN, SMZ calle Ladrón de Guevara "/>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*Descripcion*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="description">Descripcion: </label>

                    </Col>
                    <Col span={19}>
                        <TextArea
                            name="description"
                            style={{width: '31%'}}
                            value=""
                            onChange={this.onChange}
                            placeholder="Sobre mi..."
                            autoSize={{minRows: 3, maxRows: 5}}

                        />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Profile;