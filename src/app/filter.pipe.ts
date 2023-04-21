import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], location: string): any[] {

    const Uniquelocation = new Set<string>();
    const filteredArray = value.filter((item) => {
      if (Uniquelocation.has(item[location])) {
        return false;
      } else {
        Uniquelocation.add(item[location]);
        return true;
      }
    });
    return filteredArray;
  }
}
