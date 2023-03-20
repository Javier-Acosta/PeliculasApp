import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private PeliculasService: PeliculasService) {
    this.PeliculasService.getCartelera ()
    .subscribe (resp=>{
      console.log(resp);
      resp.results[0].id.toExponential
      
    })
  }}
