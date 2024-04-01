import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Job } from '../../models/job';
import { Domain } from '../../models/domaim';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  constructor(private router: Router, private userSvc: UserService, private active: ActivatedRoute) { }

  @Input('jobData') jobData: Job | null = null

  showDetails() {
    this.router.navigate(['listOfJobs/show/' + this.jobData?.name])
  }

  sendCv() {
    alert("has been sent successfully")
    this.userSvc.countCv += 1;
    this.userSvc.jobSentCVs?.push(String(this.jobData?.name))
  }
}
