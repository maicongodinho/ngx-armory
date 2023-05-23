import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNull',
  standalone: true,
})
export class IsNullPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value === null;
  }
}
