import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<any> = new EventEmitter

  public typeValue: String

  constructor() { }

  ngOnInit() {}

  public search(value: any) {
    this.typeValue = value[0]
    this.emitSearch.emit(value)
  }

}
