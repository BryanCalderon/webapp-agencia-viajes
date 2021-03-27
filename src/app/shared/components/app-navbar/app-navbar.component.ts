import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  userName = "";
  hideLoginbutton = false;

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes("login")) {
          this.hideLoginbutton = true;
        }
        this.validateLogin();
      }
    });
  }

  validateLogin() {
    return this.afAuth.user.subscribe(user => {
      if (user) {
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.userName = null;
      this.authService.deleteClientIntoLS();
      this.router.navigate(['/login']);
    });
  }

}
