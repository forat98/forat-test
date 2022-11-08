import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle:string ='pageTitle';
  constructor() { }

  ngOnInit() {
  }
  pagetilte(_event:string){
    this.pageTitle=_event
      }

}
