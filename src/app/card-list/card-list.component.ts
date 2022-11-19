import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { ListDataService } from '../service/list-data.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],

})
export class CardListComponent implements OnInit {
listData=[];
searchText!: string;

  constructor(private _ListDataService:ListDataService,private fb: FormBuilder) {

   }
   selector: string = ".main-panel";

  ngOnInit() {
    this._ListDataService.getListData().pipe(take(1)).subscribe(res=>{
      this.listData=res.slice(0, 12)

     })

  }



  loadMore() {
    this._ListDataService.getListData().subscribe(res=>{
      let newarr:[]=res.slice(this.listData.length, this.listData.length+12)
      this.listData.push(...newarr)
     })


  }
  }
