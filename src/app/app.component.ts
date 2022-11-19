import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'forat-test';
  isUserLogin: boolean | undefined;
  pageTitle!:string;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.auth.isCurrentUser();
    this.auth.currentUser$.subscribe((state) => {
      console.log(state);
      this.isUserLogin = state;
    });

  }


}
