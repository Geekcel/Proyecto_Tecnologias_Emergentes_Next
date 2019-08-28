import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-CarritoDeCompras',

  templateUrl: './CarritoDeCompras.component.html',

  styleUrls: ['./CarritoDeCompras.component.css']
})


export class ComponenteCarritoDeCompras implements OnInit {
  shoppingCartJSON:any;
  constructor(private dataService: DataService) {

    this.shoppingCartJSON = this.dataService.getShoppingCart();
  }

  ngOnInit() {
  }

  updateProductsStock(){
    this.dataService.updateProductsStock(this.shoppingCartJSON);
  }

}
