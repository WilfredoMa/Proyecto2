import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesOn'
})
export class MoviesPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((x)=> x.Available);
  }

}
