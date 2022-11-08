import { Pipe, PipeTransform } from '@angular/core';
import { data } from './interface/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(teachers:data[], searchText: string) {
    return ;
  }
}
