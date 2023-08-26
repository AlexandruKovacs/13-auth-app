import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );

  public loginForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  });

  login() {
    const { email, password } = this.loginForm.value;

    if (email !== null && email !== undefined && password !== null && password !== undefined) {
      this.authService.login(email, password)
        .subscribe(success => {
          console.log(success);
        });
    } else {
      console.error("Email and password must have valid values.");
    }
  }

}
