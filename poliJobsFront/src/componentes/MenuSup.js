import React from 'react';
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom';
class MenuSup extends React.Component{
    salir=()=>{
        localStorage.clear();
        window.location.reload();
      }
    render(){
        return(
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['4']}
            style={{ lineHeight: '64px' }}
          >
            <Link style={{color:"white" }} className="navbar-brand" to="/home"><Menu.Item key="1">Polijobs</Menu.Item></Link>
            <Link style={{color:"white" }} className="navbar-brand" to="/crearOferta"><Menu.Item key="2" >Crear Oferta</Menu.Item></Link>
            <Link style={{color:"white" }} className="navbar-brand" to="/verOfertas"><Menu.Item key="3" >Ver Ofertas</Menu.Item></Link>
            <Link style={{color:"white" }} className="navbar-brand" to="/postulantes"><Menu.Item key="4" >Postulaciones</Menu.Item></Link>
            <Link style={{color:"white" }} className="navbar-brand"> <Menu.Item onClick={this.salir}>Cerrar sesión</Menu.Item></Link>
          </Menu> 
        )
    }
}

export default MenuSup; 
