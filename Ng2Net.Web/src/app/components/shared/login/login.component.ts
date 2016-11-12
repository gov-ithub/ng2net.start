import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from '../../../services/useraccount/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: any = {};
  private loginError: string;
  private navigateTo: string;
  @ViewChild("myForm")
  private myForm: NgForm;

  constructor(// private activeModal: NgbActiveModal, 
  private userAccountService: UserAccountService,
  private router: Router) { }

  ngOnInit() { 
  }

  userLogin() {
    if (!this.myForm.valid)
      return;
    this.userAccountService.login(this.currentUser).subscribe((result) => {
      if (!result.error) {
        this.router.navigate([ this.userAccountService.redirectTo || '' ]);
      }
    });
  }
}
