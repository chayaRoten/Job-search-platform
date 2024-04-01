import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Domain } from '../../models/domaim';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  name: string = ""
  password: string = ""
  user: User | null = null
  user2: User | null = null
  constructor(private userSvc: UserService, private router: Router, private active: ActivatedRoute) { }
  save() {
    if (this.password.length >= 8 && this.password.indexOf(' ') == -1) {
      this.userSvc.getUserFromServer(this.name, this.password).subscribe((res: any) => {
        this.user = res
        if (this.user) {
          localStorage.clear()
          sessionStorage.clear()
          localStorage.setItem("user", JSON.stringify(this.user));
          this.name = ""
          this.password = ""
          this.router.navigate(['../listOfJobs'])
        }
        else {
          alert("not exist!!!")
        }
      })

    }
    else {
      alert("password error!");
    }
  }
}
