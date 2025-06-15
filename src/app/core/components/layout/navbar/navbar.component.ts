import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isOpen = false;
isHovered=false;
openMenu() {
  this.isOpen = !this.isOpen;
}

closeMenu() {
  this.isOpen = !this.isOpen; 
}
}

