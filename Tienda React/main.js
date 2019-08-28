import React from 'react';
import {render} from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ComponenteCabezera from './components/componenteCabezera.jsx';
import IniciarSesionComponente from './components/iniciarSesionComponente.jsx';

render(
    <Router>
      <div>
        <Route exact path="/" component={IniciarSesionComponente}/>
        <Route path="/IniciarSesion" component={IniciarSesionComponente}/>
        <Route path="/Inicio" component={ComponenteCabezera}/>
      </div>
    </Router>,
    document.getElementById('app')
)
