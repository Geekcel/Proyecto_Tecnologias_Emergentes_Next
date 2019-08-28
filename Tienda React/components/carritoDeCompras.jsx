import React from 'react';


const badgeColor = {
  backgroundColor : 'red'
}


const productDetails = {
  display: 'flex'
}


const productText = {
  marginLeft: '2%'
}


const body = {
  backgroundColor: 'white',
  padding: '2%'
}


class CarritoDeCompras extends React.Component{
    constructor(){
     super();
    }

    render(){
        return(
            <div style={body} className="row">
              <div className="col-sm-12">
                <div className="col-sm-12 col-md-6 text-left">
                  <h1>Carrito de Compras</h1>
                </div>
              </div>
              <div className="col-sm-6">
                <ul className="list-group">
                  {this.props.CarritoDeCompras.map((item, i) =>
                    <li className="list-group-item" key={i}>
                        <div style={productDetails}>
                          <img className="card-img-top" src={item.producto.img} alt="" width="10%" height="10%"/>
                          <div style={productText}>
                            <p>{item.producto.nombre}</p>
                            <p><strong>Unidades: </strong>{item.quantity}</p>
                          </div>
                        </div>
                        <p><strong>Subtotal: </strong>$ {item.subTotal}</p>
                    </li>
                  )}
                </ul>
              </div>




              <div className="col-sm-6">
                <h2>Total: $ {this.props.CarritoDeComprasTotal}</h2>
                <a type="button" className="btn btn-default" onClick={this.props.verLaListaDelCatalogo.bind(this)}>Cancelar</a>
                <a type="button" className="btn btn-default" onClick={this.props.revisarCarritoDeCompras.bind(this)}>Pagar</a>
              </div>
            </div>
            );
        }
      }

export default CarritoDeCompras;
