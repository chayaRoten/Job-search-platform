import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Domain } from '../../models/domaim';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countCv2: any
  user: any = null
  domain: any
  jobSentCVs: any
  constructor(private userSvc: UserService) {
    this.user = localStorage.getItem("user");
    if (this.user !== null) {
      this.user = JSON.parse(this.user);
      this.user["domain"] = Domain[this.user["domain"]]
      this.domain = this.user["domain"]
      this.countCv2 = userSvc.getCv
      this.jobSentCVs = userSvc.jobSentCVs
    }
  }

}
