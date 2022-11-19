import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any
  public getAllPokemons: any
  public apiError: boolean = false

  constructor(private pokeApiService: PokeapiService) { }

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error: error => {
        this.apiError = true
      }
    })
  }

  public getSearch(value: any) {
    const filter = this.setAllPokemons.filter((res: any) => {
      if(value[0] !== undefined ) {
        if(res.status.types[1] !== undefined) {
          return !res.name.indexOf(value[1]) && 
          (!res.status.types[0].type.name.indexOf(value[0]) || !res.status.types[1].type.name.indexOf(value[0]))
        }
        else {
          return !res.name.indexOf(value[1]) && !res.status.types[0].type.name.indexOf(value[0])
        }
      }
      else {
        return !res.name.indexOf(value[1])
      }
    })

    this.getAllPokemons = filter
  }

}
