import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  url:string="assets/list-data.json"
constructor(private http:HttpClient) { }

getListData():Observable<any>{
  return this.http.get<any>(this.url).pipe(map(x=>{
    return x.tourismDefinitionsList
  }))
   }

}
