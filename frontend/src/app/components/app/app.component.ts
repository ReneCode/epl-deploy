import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cloud Solutions - delivery';
  idToken: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  private login() {
    this.authService.login();
  }

  private logout() {
    this.authService.logout();
    this.router.navigate(['/']).then( () => {} );
  }

  private loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  private get name(): string {
    let profile = this.authService.profile;
    if (profile) {
      return profile.name;
    } else {
      return '';
    }
  }

  private get user(): any {
    let profile = this.authService.profile;
    if (profile) {
      return { 
        name: profile.nickname,
        avatar: profile.picture
      };
    } else {
      return null;
    }
  }
}
