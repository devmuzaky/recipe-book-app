import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from "../shared/data-storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(
      user => {
        // this.isLoggedIn = !!user;
        this.isLoggedIn = !user.token ? false : true;
      }
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  // logout() {
  // this.user.next(null);
  // }

  // logout() {
  //   this.isLoggedIn = false;
  //   this.router.navigate(['/auth-module']);
  // }

  onLogout() {
    this.authService.logout();
  }
}

