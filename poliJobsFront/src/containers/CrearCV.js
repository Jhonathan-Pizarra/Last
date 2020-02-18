import React, {Component} from "react";
import {Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Avatar, Card, Button} from 'antd';
import '../styles/CVitae.css';
import epn from '../images/epn.jpg';
import Curriculum from '../services/hojasVida';

class CrearCV extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: [], //para el mail
            numeroCedula: "",
            nombreCompleto: "",
            fechaNacimiento: "",
            telefono: "",
            mail: "",
            nacionalidad: "",
            escuela: "",
            colegio: "",
            universidad: "",
            idiomas: "",
            otrosConocimientos: "",
            sexo: "",
            direccion: "",
            descripcion: ""
            //password: ""
        };
    }

    //Funcion para el mail: onChange={(e) => this.handleChangeInput(e, 'mail')}
    handleChange = value => {
        this.setState({
            dataSource:
                !value || value.indexOf('@') >= 0
                    ? []
                    : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
    };

    //Funcion para recoger el valor de cualquier imput que cambie
    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
        console.log(input, $e.target.value);
    };

    crear = () => {
        const {numeroCedula, nombreCompleto, fechaNacimiento, telefono, mail, nacionalidad, escuela, colegio, universidad, idiomas, otrosConocimientos, sexo, direccion, descripcion  } = this.state;
        Curriculum.crearCV(numeroCedula, nombreCompleto, fechaNacimiento, telefono, mail, nacionalidad, escuela, colegio, universidad, idiomas, otrosConocimientos, sexo, direccion, descripcion);
    }


    render() {
        const {Option} = Select;
        const {TextArea} = Input;

        return (

            <div className="Perfil">

                <div className="Foto">
                    <Row>
                        <Col span={12}>
                            <Avatar size={120} src={epn}/>

                        </Col>
                    </Row>
                </div>

                <br/>
                {/*Numero Cedula*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="numeroCedula">Numero de Cédula: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="number"  onChange={(e) => this.handleChangeInput(e, 'numeroCedula')} name="numeroCedula" placeholder="17XXXXXXXXX-X"/>
                    </Col>
                </Row>

                <br/>
                {/*Nombre y Apllido*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="fullName">Nombres y Apellidos: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'nombreCompleto')} name="fullName" placeholder="Jhonathan"/>
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
                            <DatePicker style={{width: '31%'}} placeholder="19-11-1996" />
                        </Input.Group>

                    </Col>
                </Row>

                {/*
                <br/>
                Contraseña
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="password">Contraseña: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Password style={{width: '31%'}} placeholder="SalsaDeTomate123:" name="password" value={password}/>
                    </Col>
                </Row>
                */}

                <br/>
                {/*Telefono*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="phone">Telefono: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group name="phone">
                            <Input style={{width: '7%'}} defaultValue="+593"/>
                            <Input style={{width: '13%'}} type="number" onChange={(e) => this.handleChangeInput(e, 'telefono')} name="phone" placeholder="0990803132"/>

                        </Input.Group>
                    </Col>
                </Row>

                <br/>
                {/*Email*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="email">Correo electrónico: </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact>
                            <AutoComplete
                                dataSource={this.state.dataSource}
                                style={{width: '31%'}}
                                onChange={this.handleChange}
                                placeholder="jhonathan@email.epn.edu.ec"
                                name="email"
                                />
                        </Input.Group>
                    </Col>
                </Row>

                <br/>
                {/*Nacionalidad*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="nationaliti">Nacionalidad: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'nacionalidad')} name="nationaliti" placeholder="Japanese"/>
                    </Col>
                </Row>

                <br/>
                {/*Escuela*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="school">Escuela: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'escuela')} name="school" placeholder="U.E.N.S.C"/>
                    </Col>
                </Row>

                <br/>
                {/*Colegio*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="highschool">Colegio: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'colegio')} name="highschool" placeholder="C.U.E.N.S.C"/>
                    </Col>
                </Row>

                <br/>
                {/*Universidad*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="university">Universidad: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'universidad')} name="university" placeholder="E.P.N"/>
                    </Col>
                </Row>

                <br/>
                {/*Idiomas*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="idioms">Idiomas: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'idiomas')} name="idioms" placeholder="Engish, Español Desuch..."/>
                    </Col>
                </Row>

                <br/>
                {/*Otros Conocimientos*/}
                <Row>
                    <Col span={3}>
                        <label htmlFor="knows">Otros Conocimientos: </label>
                    </Col>
                    <Col span={19}>
                        <Input style={{width: '31%'}} type="text" onChange={(e) => this.handleChangeInput(e, 'otrosConocimientos')} name="knows" placeholder="Symfony, React, Laravel, php.."/>
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
                            <Select defaultValue="Hombre">
                                <Option value="M">Hombre</Option>
                                <Option value="F">Mujer</Option>
                            </Select>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>

                {/*
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
                */}

                <br/>
                {/*Direccion*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="address">Direccion </label>
                    </Col>
                    <Col span={19}>
                        <Input.Group compact name="address">
                            <Select defaultValue="EPN, SMZ calle Ladrón de Guevara"  style={{width: '31%'}}>
                                <Option value="Norte">EPN, SMZ calle Ladrón de Guevara</Option>
                                <Option value="Sur">Quicentro Sur, SMZ calle AV-Guevara</Option>
                                <Option value="Centro">La Ronda, SMZ 22 calle José Roldos</Option>
                            </Select>
                        </Input.Group>
                    </Col>
                </Row>

                <br/>
                {/*Sobre mi*/}
                <Row>
                    <Col span={3}>
                        <label style={{width: '20%'}} htmlFor="description">Descripcion: </label>

                    </Col>
                    <Col span={19}>
                        <TextArea
                            name="description"
                            style={{width: '31%'}}
                            value=""
                            onChange={(e) => this.handleChangeInput(e, 'descripcion')}
                            placeholder="Sobre mi..."
                            autoSize={{minRows: 3, maxRows: 5}}
                            />
                    </Col>
                </Row>

                {/*<button onClick={()=> this.postData()}>presiona y ve la magia!</button>*/}
                {/*<Button onClick={() => this.AddTareas({ nombre: nombre,  password: password})}>Agregar</Button>*/}
                <Button onClick={this.crear}>Enviar CV</Button>

            </div>
        );
    }
}

export default CrearCV;