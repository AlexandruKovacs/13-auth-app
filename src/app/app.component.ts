import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject( AuthService );
  private router = inject( Router );

  public finishedChecking = computed( () => {

    if ( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }
    return true;
  });

  public authStatusChangeEffect = effect( () => {

    switch ( this.authService.authStatus() ) {

      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigate(localStorage.getItem('redirectUrl') ? [localStorage.getItem('redirectUrl')] : ['/dashboard']);
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigate(['/auth/login']);
        return;

    }

  });


}
