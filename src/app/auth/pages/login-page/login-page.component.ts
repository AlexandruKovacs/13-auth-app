import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );

  public loginForm = this.fb.group({
    email: ['alex@google.es', [ Validators.required, Validators.email ]],
    password: ['1234567', [ Validators.required, Validators.minLength(6) ]]
  });

  login() {
    const { email, password } = this.loginForm.value;

    if (email !== null && email !== undefined && password !== null && password !== undefined) {
      this.authService.login(email, password)
        .subscribe({
          next: () => console.log("Login success"),
          error: (message) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: message
            });
          }
        });
    } else {
      console.error("Email and password must have valid values.");
    }
  }

}
