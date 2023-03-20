import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { Routes } from '@angular/router';

const routes :Routes=[
  {
  path:'home',
  component:HomeComponent
},
{
  path:'pelicula/:id',
  component:HomeComponent
},
{
  path:'buscar/:texto',
  component:BuscarComponent
},
{
  path:'**',
  redirectTo: '/home'
  
},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    routerm
  ]
})
export class AppRoutingModule { }
