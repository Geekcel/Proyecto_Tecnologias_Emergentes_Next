import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './InicioSesion/InicioSesion.component';
import { InicioComponent } from './Inicio/Inicio.component';
import { ProductComponent } from './Inicio/product/product.component';
import { ComponenteCarritoDeCompras } from './Inicio/CarritoDeCompras/CarritoDeCompras.component';
import { CatalogoDeProductosComponente } from './Inicio/CatalogoDeProductos/CatalogoDeProductos.component';

const routes: Routes = [
   {path: '', component: InicioSesionComponent},

   {path: 'Inicio', component: InicioComponent, children: [
     {path: '', redirectTo: 'CatalogoDeProductos', pathMatch: 'full'},

     {path: 'CatalogoDeProductos', component: CatalogoDeProductosComponente},

     {path: 'CarritoDeCompras', component: ComponenteCarritoDeCompras},

     {path: 'product/:index', component: ProductComponent}
   ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }

export const app_routing = RouterModule.forRoot(routes, {useHash:true});
