import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FilterJobComponent } from './components/filter-job/filter-job.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ListOfJobsComponent } from './components/list-of-jobs/list-of-jobs.component';
import { ShowDetailsJobComponent } from './components/show-details-job/show-details-job.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpacityDirective } from './directives/opacity';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobComponent,
    LoginComponent,
    ManagerComponent,
    ListOfJobsComponent,
    ShowDetailsJobComponent,
    FilterJobComponent,
    OpacityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
