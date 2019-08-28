import React from 'react';
import ListaDeProductos from './listaDeProductos.jsx';
import CarritoDeCompras from './carritoDeCompras.jsx';
import VerProducto from './verProducto.jsx';




class ComponenteDelCuerpo extends React.Component{
    constructor(){
     super();
    }

    render(){
      const pagina = this.props.pagina;
      if (pagina=='list') {
        return <ListaDeProductos verProducto={this.props.verProducto} agregarProducto={this.props.agregarProducto} productosFiltrados={this.props.productosFiltrados} handleChange={this.props.handleChange}/>;
      }else if(pagina=='CarritoDeCompras'){
        return <CarritoDeCompras
                  CarritoDeCompras={this.props.CarritoDeCompras}

                  CarritoDeComprasTotal={this.props.CarritoDeComprasTotal}

                  verLaListaDelCatalogo={this.props.verLaListaDelCatalogo}

                  revisarCarritoDeCompras={this.props.revisarCarritoDeCompras}/>;
      }else if(pagina=='verProducto'){
        return <VerProducto VeridDelProducto={this.props.VeridDelProducto} verLaListaDelCatalogo={this.props.verLaListaDelCatalogo}/>;
      }else{
        return <ListaDeProductos />;
      }
    }

}

export default ComponenteDelCuerpo;
