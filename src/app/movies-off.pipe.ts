import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesOff'
})
export class MoviesOffPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((x)=> !x.Available);
  }

}
