import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(data: number[]): string {
    return data[2] + '/' + data[1] + '/' + data[0] + ' ' +
           data[3] + ':' + data[4] + ':' + data[5];
  }

}
