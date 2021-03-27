import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardDeactivateService implements CanDeactivate<Router> {
    constructor(private afAuth: AngularFireAuth, public router: Router) { }

    canDeactivate(component: Router, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.afAuth.user.subscribe(user => {
            if (user) {
                this.router.navigate([nextState.url]);
                return false;
            }
        });
        return true;
    }
}