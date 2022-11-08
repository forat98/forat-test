import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User[] = [{ Email: 'test@test.com', password: 'test' }];
  private isUserLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private pageTitle: Subject<string> = new Subject();
  public page$ = this.pageTitle.asObservable();
  public currentUser$ = this.isUserLogin.asObservable();
  constructor() {}

  login(Email: string, password: string) {
    this.user.map((x) => {
      if (Email == x.Email && password == x.password) {
        let token = btoa(JSON.stringify(x.Email));
        localStorage.setItem('currentUser', token);
        this.isUserLogin.next(true);
      }
    });
  }
  isCurrentUser() {
    if (localStorage.getItem('currentUser')) this.isUserLogin.next(true);
  }
  
  changeTitle(value: string) {
    this.pageTitle.next(value);
  }
}
