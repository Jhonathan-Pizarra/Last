import React from 'react';
import { Form, Input, Button, Card,Menu,  Modal, Carousel} from 'antd';
import Auth from '../services/auth';
import '../styles/Login.css';

class Login extends React.Component{
   state={
     usuario: '',
     pass: '',
     visible: false,
     
   }

   showModal = () => {
     this.setState({
       visible: true,
     });
   };
 
   handleOk = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };
 
   handleCancel = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };
   
   
    iniciar=()=>{  
      const {usuario, pass} = this.state;
        Auth.login(this.state.usuario, this.state.pass); 
              
    }
    

    
    handleChangeInput = ($e, input) => {
      const newState = {};
      newState[input] = $e.target.value;
      this.setState(newState);
      
  };


      render() {
        
        return (
        <div>
            <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Polijobs</Menu.Item>
        <Menu.Item key="2" onClick={this.showModal}>Iniciar Sesión</Menu.Item>
      </Menu>          

      <Modal
          title="Iniciar Sesión"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button id="iniciar"  type="danger" onClick={this.iniciar}>Iniciar</Button>
          ]}
        >
        
          <form>
            <label>Correo</label>
            <Input placeholder="micorreo@hotmail.com" onChange={(e)=>this.handleChangeInput(e, 'usuario')} /> 
            <label>Contraseña</label>
            <Input type="password" placeholder="******" onChange={(e)=>this.handleChangeInput(e, 'pass')} />  
            
          </form> 


        
        </Modal>

        <Carousel autoplay effect="fade">
    <div className="car1">
      <h3>A un click del éxito!</h3>
    </div>
    <div className="car2">
      <h3>Tú nos importas</h3>
    </div>
    <div className="car3">
      <h3>Somos PoliJobs</h3>
    </div>
   
  </Carousel>
           
          </div>
        );
      }
}

const LoginForm = Form.create({ name: 'loginform' })(Login);

export default LoginForm;  