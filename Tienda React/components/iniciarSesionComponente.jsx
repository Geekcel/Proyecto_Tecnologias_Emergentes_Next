import React from 'react';
import { IniciarSesion } from '../helpers/auth'

const divHtml  = {
  display: 'table',
  margin: 'auto',
  height: '100vh',
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'/assets/img/login-fondo.jpg\')'
}

const divBody  = {
  width: '100vw',
  display: 'table-cell',
  verticalAlign: 'middle',
  color: 'white'
}



const error = {
    color: 'red'
}



class IniciarSesionComponente extends React.Component{
    constructor(){
      super();
      this.state = {value: '', passwordVal:'', error:''};

      this.handleChange = this.handleChange.bind(this);

      this.handleChangePassword = this.handleChangePassword.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChangePassword(event) {
      this.setState({passwordVal: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      IniciarSesion(this.state.value, this.state.passwordVal)
        .then(()=>{
          this.props.history.push('/Inicio')
        })
        .catch((error) => {
            this.setState({error: 'email'});
          })
    }

    render(){
      return (<div style={divHtml}>
        <div style={divBody}>

          <div className="col-sm-6 col-sm-offset-3">

            <h4 className="text-center">Iniciar Sesion</h4>

            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                
                <label htmlFor="email-input">Correo electrónico</label>

                <input type="email" className="form-control" id="email-input" name="email" required value={this.state.value} onChange={this.handleChange} />

              </div>


              <div className="form-group">
                <label htmlFor="password-input">Contraseña</label>
                
                <input type="password" className="form-control" id="password-input" name="password" required value={this.state.passwordVal} onChange={this.handleChangePassword}/>
              </div>


              <label style={error}>{(() => {
                      switch (this.state.error) {
                        case "email":   return "El Usuario O La Contraseña Son Incorrectos";
                        default:      return "";
                      }
                    })()}</label>
              <button type="submit" className="btn btn-success center-block">Ingresar</button>
            </form>
          </div>
        </div>
      </div>);
    }
}

export default IniciarSesionComponente;
