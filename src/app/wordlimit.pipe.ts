import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit'
})
export class WordlimitPipe implements PipeTransform {

  transform(value: string, limit: number): string {

    const worrds = value.split(' ');
    const slicewords = worrds.slice(0, limit);
    const result = slicewords.join(' ');

    if (worrds.length > limit) {
      return `${result}......`;
    }
    return result
  }

}
