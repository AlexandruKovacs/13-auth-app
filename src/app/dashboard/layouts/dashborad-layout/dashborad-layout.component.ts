import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashborad-layout.component.html',
  styleUrls: ['./dashborad-layout.component.css']
})
export class DashboradLayoutComponent {

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() );

  // get user() {
  //   return this.authService.currentUser();
  // }

}
