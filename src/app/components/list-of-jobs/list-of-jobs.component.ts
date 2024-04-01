import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Job } from '../../models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Domain } from '../../models/domaim';

@Component({
  selector: 'app-list-of-jobs',
  templateUrl: './list-of-jobs.component.html',
  styleUrl: './list-of-jobs.component.scss'
})
export class ListOfJobsComponent implements OnInit {
  jobs: Job[] = []
  constructor(private userSvc: UserService, private active: ActivatedRoute, private router: Router) {
    if (localStorage.getItem("user")) {
      this.jobs = this.userSvc.getJobs;
    }
    else {
      alert("It is not possible to enter the page without logging in")
      this.router.navigate(['../login'])
    }
  }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      if (params['domain']) {
        this.filterChange1(params['domain'])
      }
    })
  }

  filterChange1($event: any) {
    this.jobs = this.jobs.filter(x => x['domain'] == $event)
  }

  filterDetails: any = null
  filterChange2($event: any) {
    this.filterDetails = $event
    if ($event['nameDoamin'] && $event['nameLocation']) {
      alert("error!!!!")
    }
    else {
      if ($event['nameDoamin']) {
        this.jobs = this.jobs.filter(x => x['domain'] == $event['nameDoamin'])
      }
      else {
        if ($event['nameLocation']) {
          this.jobs = this.jobs.filter(x => x.location == $event['nameLocation'])
        }
      }
    }
  }
}


