import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router );

  public loginForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  });

  login() {
    const { email, password } = this.loginForm.value;

    if (email !== null && email !== undefined && password !== null && password !== undefined) {
      this.authService.login(email, password)
        .subscribe({
          next: () => this.router.navigateByUrl('/dashboard'),
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
