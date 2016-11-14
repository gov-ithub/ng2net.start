import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../../../services/useraccount/user-account.service';
@Component({
  selector: 'app-menu-aside',
  templateUrl: 'menu-aside.component.html',
  styleUrls: ['menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {

  constructor(private userAccountService: UserAccountService, private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
    this.userAccountService.logout();
    this.router.navigate(['/login']);
  }
}
