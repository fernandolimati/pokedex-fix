import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  constructor( private http: HttpClient) { 
    this.getPokemons();
  }

  getPokemons(){
    return this.http.get<any>(this.baseUrl)
    .pipe(tap( res => res ), 
      tap( res => {
        res.results.map( ( resPokemons:any ) => {

          this.apiGetPokemons(resPokemons.url).subscribe( res => resPokemons.status = res )

        })
      })
    )
  }

  public apiGetPokemons( url: string){
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }

}
