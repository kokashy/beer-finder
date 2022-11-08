
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cerveza } from 'src/app/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( 
    private _http: HttpClient
  ) { }
 
  ngOnInit(): void {
    this._http.get('https://api.punkapi.com/v2/beers').subscribe(
      (beer: any) => this.cervezas = beer )
      
  }
  filtro_valor = ''
  cervezas: Array<cerveza> = [];
  values = Object.values(this.cervezas);
  handleSearch(value: string){
    this.filtro_valor = value;
  }
  buscarNombre(){
    
    
  }
}
