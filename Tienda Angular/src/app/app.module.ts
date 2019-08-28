import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './InicioSesion/InicioSesion.component';


import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './Inicio/Inicio.component';
import { BarraDeNavegacionComponent } from './Inicio/BarraDeNavegacion/BarraDeNavegacion.component';
import { CatalogoDeProductosComponente } from './Inicio/CatalogoDeProductos/CatalogoDeProductos.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ProductComponent } from './Inicio/product/product.component';
import { ComponenteCarritoDeCompras } from './Inicio/CarritoDeCompras/CarritoDeCompras.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCul20riEsI6NEE2Ogr93H8TWv019s3BV4",
  authDomain: "tienda-online-e05ec.firebaseapp.com",
  databaseURL: "https://tienda-online-e05ec.firebaseio.com",
  storageBucket: "tienda-online-e05ec.appspot.com",
  messagingSenderId: "945224586886"
};


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    InicioComponent,
    BarraDeNavegacionComponent,
    CatalogoDeProductosComponente,
    SearchFilterPipe,
    ProductComponent,
    ComponenteCarritoDeCompras
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers: [AngularFireDatabase,AngularFireAuth, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
