import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http:HttpClient) { }


  getCartelera (): Observable<CarteleraResponse>{
   return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=be270367cf56933a8de60a8dcf67e16c&language=es-ES&page=1')

  }
}
