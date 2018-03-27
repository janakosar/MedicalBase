/**
 * Created by yana on 27.03.18.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {Patient} from "../domain/Patient";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(items: Patient[], searchText: string): Patient[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return (it.firstName + " " + it.lastName).toLowerCase().includes(searchText);
    });
  }
}
