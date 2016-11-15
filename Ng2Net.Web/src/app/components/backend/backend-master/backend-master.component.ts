import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../../services';
import '../assets/js/app.js';

@Component({
  selector: 'app-backend-master',
  templateUrl: './backend-master.component.html',
  styleUrls: ['./backend-master.component.css']
})
export class BackendMasterComponent implements OnInit {

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit() {
  }

}
