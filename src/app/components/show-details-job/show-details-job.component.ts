import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job';
import { Domain } from '../../models/domaim';

@Component({
  selector: 'app-show-details-job',
  templateUrl: './show-details-job.component.html',
  styleUrl: './show-details-job.component.scss'
})
export class ShowDetailsJobComponent implements OnInit {
  jobs: Job[] = []
  currentJob: Job | undefined = undefined
  constructor(private userSvc: UserService, private router: ActivatedRoute) {
    this.jobs = userSvc.getJobs;
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.filterChange(params['name'])

    })
  }
  filterChange($event: any) {
    this.currentJob = this.jobs.find(x => x.name === $event)

  }

}
