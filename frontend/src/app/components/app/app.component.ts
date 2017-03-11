import { Component } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

declare var Auth0Lock;

// from https://manage.auth0.com
let credentials = {
  clientId: 'r12UEbyFznTZ3NE28AIhFaf0mM5ybycG',
  domain: 'relang.eu.auth0.com'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cloud Solutions - delivery';
  idToken: string;

  lock = new Auth0Lock(credentials.clientId, credentials.domain);
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() {
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }

        this.idToken = authResult.idToken;
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('token', authResult.idToken);

        console.log(
          this.jwtHelper.decodeToken(authResult.idToken),
          this.jwtHelper.getTokenExpirationDate(authResult.idToken),
          this.jwtHelper.isTokenExpired(authResult.idToken)
        );
      })
    });
  }

  private login() {
    let self = this;
    this.lock.show();
  }


  private logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    this.loggedIn();
  }

  private loggedIn(): boolean {
    let token = localStorage.getItem('token');
    return tokenNotExpired(null, token);
  }
}
