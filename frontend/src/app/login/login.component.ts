import { Component,EventEmitter, OnInit ,  Output} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser:User;
  username: any;
  password = '';
  invalidLogin = false;
  error:string='';
  idLoginUser:any;
  loggedUser: Boolean;
  placeholder = 'Унесите информације';

  @Output()
  LogIn: EventEmitter<void> = new EventEmitter();
  constructor(private router: Router,
    private loginservice: AuthenticationService, private registrationService: RegistrationService) { 

  }

  ngOnInit(): void {
  }

 
  login() {
    if (this.username == '' || this.password == '')
      this.error = "Username and password must be filled out";
    else {
      this.loginservice.authenticate(this.username, this.password).subscribe(
        (data: any) => {
          console.log(data)
          this.LogIn.next();
          this.idLoginUser = sessionStorage.getItem('id');
          this.findUserById();

          if(this.newUser.role == 'Mechanic')
          {
             location.pathname = ('mechanic_planes');
          }

          if(this.newUser.role == 'Pilot')
          {
             location.pathname = ('pilot_profile/' + this.idLoginUser);
          }

          if(this.newUser.role == 'FlyController')
          {
             location.pathname = ('stuff_profile');
          }
          
         //this.router.navigate(['']);
          this.invalidLogin = false
        },
        (error: { message: string | null; }) => {
          this.invalidLogin = true
          this.error = "Invalid username or password or your account is not active";

        })
    }
  }

  findUserById()
  {
     this.registrationService.getUserById(this.idLoginUser)
     .subscribe(res =>this.newUser =res)

     
  }



}
