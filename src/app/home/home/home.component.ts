import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle:string ='pageTitle';
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.page$.subscribe((tilte):string=>{
      return this.pageTitle = tilte;
    })
  }
  pagetilte(_event:string){
    this.pageTitle=_event
      }

}
