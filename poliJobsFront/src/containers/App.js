import React from 'react';
import '../styles/App.css';
import {Route, BrowserRouter} from 'react-router-dom'; 
import Home from './Showofert';
import LoginForm from './Login';
import Createofert from "./Createofert";
import MenuSup from '../componentes/MenuSup';
import Showofert from './Showofert';
import Postulantes from "../componentes/Postulantes";
import MostrarCV from "./MostrarCV";

import Btnpostulantes from "../componentes/Btnpostulantes";
var token = localStorage.getItem('token');
var contenido;

class App extends React.Component {
  render(){
 /*   console.log('renderizando'); 
  if(token===null || token==='undefined'){
    contenido = <LoginForm/>;
    }else{
    contenido = <Home/>; 
    }*/
  return (
    <div className="App">
        {/*
      <BrowserRouter>
      <MenuSup/>
      <Route exact path='/home' component={Showofert}/>
      <Route path='/ficha/:id'/> 
      <Route path='/crearOferta' component={Createofert}/> 
      <Route path='/verOfertas' component={Showofert}/>
      <Route path='/postulantes' component={Postulantes}/>
      <Route path = '/btnpostulantes/:id' component = {Btnpostulantes}/>
      </BrowserRouter>
      */}
      <MostrarCV/>
           
    </div>
  );
}
}

export default App;
