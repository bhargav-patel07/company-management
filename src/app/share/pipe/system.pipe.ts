import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'system'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {
    if (!items) return [];
    if (!searchText) return items;
  
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }
}
