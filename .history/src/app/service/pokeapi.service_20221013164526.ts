import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500';

  constructor(private http: HttpClient) { }

  get apiListAllPokemons():Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string):Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }
}