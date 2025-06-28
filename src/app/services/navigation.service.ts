// navigation.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private previousUrl: string = '';
  private currentUrl: string = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        pairwise()
      )
      .subscribe(([prev, curr]: any) => {
        this.previousUrl = prev.url;
        this.currentUrl = curr.url;
      });
  }

  public getPreviousUrl(): string {
    return this.previousUrl;
  }
}
