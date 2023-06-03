import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Credentials } from 'src/app/share/models/credentials.model';

@Component({
  selector: 'section[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials;
  public submitted: boolean=false;
  public errorMsg: string='';

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { 
    this.credentials = new Credentials();
  }

  ngOnInit(): void {
    
  }

  public login(form:any):void{ 
    this.submitted = true;
    
    if (!form.valid) return

    this.authenticationService
      .login(this.credentials)
      .then(() => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch((error) => {
        this.errorMsg = error.message;
      });
    }

}
