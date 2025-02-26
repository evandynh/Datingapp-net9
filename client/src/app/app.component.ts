import { Component, inject, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AccountsService } from './_services/accounts.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private accountsService = inject(AccountsService);

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountsService.currentUser.set(user);
  }
}
