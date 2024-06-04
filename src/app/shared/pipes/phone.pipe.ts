import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(data: string): string {
    return '(' + data.charAt(0) + data.charAt(1) + data.charAt(2) + ') ' + data.charAt(3) + 
            data.charAt(4) + data.charAt(5) + ' - ' + data.charAt(6) + data.charAt(7) +
            data.charAt(8) + data.charAt(9);
  }

}
