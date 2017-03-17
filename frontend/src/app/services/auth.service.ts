import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
// import 'rxjs/add/operator/filter';
import { authCredentials } from './auth-credentials';

declare var Auth0Lock;


@Injectable()
export class AuthService {

  userProfile: any;
  lock = new Auth0Lock(authCredentials.clientId, authCredentials.domain, {
    auth: {
      redirectUrl: 'http://localhost:4200/',
      responseType: 'token'
    }
  });
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      // get profile information
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
      //   console.log("##", error, profile);
      // });
      // this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // handle Error
          throw new Error(error);
        }

        // localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;

      //   // console.log(
      //   //   this.jwtHelper.decodeToken(authResult.idToken),
      //   //   this.jwtHelper.getTokenExpirationDate(authResult.idToken),
      //   //   this.jwtHelper.isTokenExpired(authResult.idToken),
      //   //   profile
      //   // );
      });
    });

    this.router.events
      .filter(event => event.constructor.name === 'NavigationStart')
      .filter(event => (/access_token|id_token|error/).test(event.url))
      .subscribe( () => {
        this.lock.resumeAuth(window.location.hash, (error, authResult) => {
          if (error) {
            return console.log(error);
          }
          localStorage.setItem('id_token', authResult.idToken);
          this.router.navigate(['/']);
        });
      });

  }

  public login() {
    this.lock.show();
  }

  public logout() {
    // localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.userProfile = undefined;
  }

  public loggedIn(): boolean {
    // let token = localStorage.getItem('token');
    // return tokenNotExpired(null, token);
//    console.log("## isLoggedIn");
    return tokenNotExpired();
  }

  public get profile(): any {
    return this.userProfile;
  }

}
