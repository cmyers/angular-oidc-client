import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User = null;
  constructor(
    private authService: AuthService
    ) {}

  ngOnInit() {
      this.user = this.authService.getUser();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
