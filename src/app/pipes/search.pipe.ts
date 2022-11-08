import { Pipe, PipeTransform } from '@angular/core';
import { cerveza } from '../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: Array<cerveza>, texto: string): Array<cerveza> {
    if(!texto) return lista;
    return lista.filter(user => JSON.stringify(user).toUpperCase().includes(texto.toUpperCase()))
  }

}
