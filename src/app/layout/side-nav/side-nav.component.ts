import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onselectNav(value: string) {
    this.auth.changeTitle(value);
  }
}
