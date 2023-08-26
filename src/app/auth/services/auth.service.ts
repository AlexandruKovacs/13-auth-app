import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';

import { User } from '../interfaces';
import { AuthStatus } from '../interfaces/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User | null>( null );
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  constructor() { }

  login( email: string, password: string ): Observable<boolean> {

    return of(true);
  }

}
