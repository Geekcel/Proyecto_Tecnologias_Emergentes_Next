import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-CatalogoDeProductos',
  templateUrl: './CatalogoDeProductos.component.html',
  styleUrls: ['./CatalogoDeProductos.component.css']
})


export class CatalogoDeProductosComponente implements OnInit {
  private products:any = [];

  private productsQuantity:any = '';

  private productJSON:any;

  private subtotal:number;

  private stock:number;

  constructor(private dataService: DataService) {
    this.dataService.getProducts().then((data)=>{
      this.products = data["products"];
    });
  }

  ngOnInit() {
  }

  addProductToShoppingCart(product, quantity){

    this.productsQuantity = document.getElementById('badge').textContent;
    document.getElementById("badge").innerHTML  = String(Number(this.productsQuantity) + 1);

    this.subtotal = product.precio * quantity;
    this.stock = product.stock - quantity;
    document.getElementById("unidadDisponible-"+product.index).innerHTML = String(Number(this.stock));

    this.productJSON = {
      product : product,
      quantity : quantity,
      subtotal : this.subtotal
    }

    this.dataService.addProductToShoppingCart(this.productJSON);

  }

}
