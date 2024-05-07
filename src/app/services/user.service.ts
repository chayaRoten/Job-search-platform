import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';
import { Job } from '../models/job';
import { Domain } from '../models/domaim';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    user: User | null = null;
    jobs: Job[] = []
    jobSentCVs: string[] | null = []
    countCv: number = 0

    constructor(private http: HttpClient) {
        this.getJobsFromServer().subscribe((res: any) => res.forEach((c: any) => { c.domain = Domain[c.domain]; this.jobs.push(c) }))
    }

    getUserFromServer(username: string, password: string): Observable<any> {
        this.user = { name: username, password: password, id: 0, domain: 0 }
        return this.http.post(`https://localhost:44337/api/User`, this.user)
    }

    getJobsFromServer(): Observable<any> {
        return this.http.get(`https://localhost:44337/api/Job`);
    }

    public get getJobs() {
        return this.jobs
    }


    public get getCv() {
        return this.countCv;
    }

    public filterByDomain(event: any){
        let f=this.jobs.filter(x=> x['domain']===event)
        return f
    }
    public filterByLocation(event:any){
        let f=this.jobs.filter(x => x['location'] == event)
        return f
    }

}
