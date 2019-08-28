import React from 'react';
import * as request from 'superagent';
import { NavItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ListaDeProductos from './listaDeProductos.jsx';
import CarritoDeCompras from './carritoDeCompras.jsx';
import ComponenteDelCuerpo from './componenteDelCuerpo.jsx';
import ReactDOM from 'react-dom';

const badgeColor = {
  backgroundColor : 'red'
}

const imageMain = {
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'/assets/img/main-fondo.jpg\')',
  height: '100vh'
}



class ComponenteCabezera extends React.Component{

    constructor(){
       super();
       this.state = {
         pagina:'list',
         productos : [],
         VeridDelProducto:-1,
         CarritoDeCompras : [],
         CarritoDeComprasTotal: 0,
         productosFiltrados: []
       }
    }



    componentWillMount(){
      request.get('https://tienda-online-e05ec.firebaseio.com/productos.json')
              .end((err, res)=>{
                if(err || !res.ok){
                  console.log("Error en la solicitud: "+err);
                }else{
                  this.setState({ productos : JSON.parse(res.text)});
                  this.setState({ productosFiltrados : JSON.parse(res.text)});
                }
              })
    }



    actualizarProductos(){

      let promise = new Promise((resolve, reject)=>{
        (function loop(i, CarritoDeCompras, productosFiltrados) {
            if (i < CarritoDeCompras.length){
                new Promise(resolve => {
                    let index = CarritoDeCompras[i].producto.index;
                    let unidadDisponible = CarritoDeCompras[i].producto.stock - Number(CarritoDeCompras[i].quantity);
                    let data = {
                      stock : unidadDisponible
                    }
                    request.patch(`https://tienda-online-e05ec.firebaseio.com/productos/${ index }.json`,JSON.stringify(data)).end((err,res)=>{
                        productosFiltrados[CarritoDeCompras[i].producto.index].stock = unidadDisponible;
                        resolve();
                    });
                }).then(loop.bind(null, i+1, CarritoDeCompras, productosFiltrados));
            }else{
              resolve();
            }
        })(0, this.state.CarritoDeCompras, this.state.productosFiltrados);
      });

      return promise;
    }



    revisarCarritoDeCompras(){
      this.actualizarProductos().then(()=>{
        document.getElementById("CarritoDeComprasBadge").innerHTML = "";
        this.setState({ CarritoDeComprasTotal : 0});
        this.setState({ CarritoDeCompras : []});
        this.verLaListaDelCatalogo();
      });
    }



    verCarritoDeCompras(){
      this.setState({pagina:'CarritoDeCompras'});
    }



    verLaListaDelCatalogo(){
      this.setState({pagina:'list'});
    }



    verProducto(i, event){
      this.setState({pagina:'verProducto', VeridDelProducto:i});
    }



    agregarProducto(i, event){
      let idProductInput = document.getElementById("producto"+i);

      let inputValue = ReactDOM.findDOMNode(idProductInput).value;

      let CarritoDeComprasItem = {
        producto: this.state.productos[i],
        quantity: inputValue,
        subTotal: (Number(inputValue) * this.state.productos[i].precio)
      }

      var CarritoDeCompras = this.state.CarritoDeCompras;

      CarritoDeCompras.push(CarritoDeComprasItem);

      document.getElementById("CarritoDeComprasBadge").innerHTML = CarritoDeCompras.length;

      let CarritoDeComprasTotal = this.state.CarritoDeComprasTotal;

      CarritoDeComprasTotal = CarritoDeComprasTotal + CarritoDeComprasItem.subTotal;

      this.setState({CarritoDeComprasTotal:CarritoDeComprasTotal, CarritoDeCompras:CarritoDeCompras});
    }



    handleChange(event) {
      let filterValue = event.target.value;

      let productos_search = [];

      filterValue.toLowerCase();

      this.state.productos.map( (producto,i) => {
          let precioString = String(producto.precio);

          let stockString = String(producto.stock);

          if(producto.nombre.toLowerCase().indexOf(filterValue)>=0
            || precioString.indexOf(filterValue)>=0
            || stockString.indexOf(filterValue)>=0){
            productos_search.push(producto);
          }
      })

      this.setState({ productosFiltrados : productos_search});

    }



    render(){
        return(
            <div style={imageMain}>
              <div className="container">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#/Inicio">
                        Bienvenid@ A La Bodega 
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                        <NavItem href="#" onClick={this.verLaListaDelCatalogo.bind(this)}>
                          <Glyphicon glyph="th" />
                        </NavItem>
                        <NavItem href="#" onClick={this.verCarritoDeCompras.bind(this)}>
                          <Glyphicon glyph="shopping-cart" /><span style={badgeColor} className="badge" id="CarritoDeComprasBadge"></span>
                        </NavItem>
                        <NavItem href="#">
                          <Glyphicon glyph="inbox" />
                        </NavItem>
                        <NavItem href="#/IniciarSesion">
                          <Glyphicon glyph="log-out" />
                        </NavItem>
                      </ul>
                    </div>
                  </div>
                </nav>
                <ComponenteDelCuerpo pagina={this.state.pagina}

                              CarritoDeCompras={this.state.CarritoDeCompras}

                              CarritoDeComprasTotal={this.state.CarritoDeComprasTotal}

                              verProducto={this.verProducto.bind(this)}

                              productosFiltrados={this.state.productosFiltrados}

                              VeridDelProducto={this.state.VeridDelProducto}

                              verLaListaDelCatalogo={this.verLaListaDelCatalogo.bind(this)}

                              agregarProducto={this.agregarProducto.bind(this)}

                              handleChange={this.handleChange.bind(this)}
                              
                              revisarCarritoDeCompras={this.revisarCarritoDeCompras.bind(this)}/>
              </div>
            </div>
            );
        }
      }



export default ComponenteCabezera;
