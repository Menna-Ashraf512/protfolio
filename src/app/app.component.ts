import { Component } from '@angular/core';
import { LoaderComponent } from "./core/components/layout/loader/loader.component";
import { Router, RouterOutlet } from '@angular/router';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart,Event } from '@angular/router';
import { NavbarComponent } from "./core/components/layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [LoaderComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'protfolio';
   loading = false;

  constructor(private router: Router) {
this.router.events.subscribe((event: Event) => {
  if (event instanceof NavigationStart) {
    this.loading = true;
  }

  if (
    event instanceof NavigationEnd ||
    event instanceof NavigationCancel ||
    event instanceof NavigationError
  ) {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
});
}
}
