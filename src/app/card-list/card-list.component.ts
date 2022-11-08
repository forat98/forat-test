import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    this._ListDataService.getListData().subscribe(res=>{
     this.listData=res
    })

  }


  loadingThrottle = 3000;

  loadMore() {
    console.log('scrllll')
        window.setTimeout(() => {
        }, this.loadingThrottle);
     
  }
  }
