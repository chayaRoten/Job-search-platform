import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfJobsComponent } from './components/list-of-jobs/list-of-jobs.component';
import { ShowDetailsJobComponent } from './components/show-details-job/show-details-job.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'listOfJobs', component: ListOfJobsComponent},
  { path: 'listOfJobs/:domain', component: ListOfJobsComponent },
  { path: 'listOfJobs/show/:name', component: ShowDetailsJobComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
