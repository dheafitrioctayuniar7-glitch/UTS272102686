import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { GalleryComponent } from './gallery/gallery';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    HeaderComponent,
    SidebarComponent,
    GalleryComponent,
    FooterComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarOpen = true;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  closeSidebarIfOpen(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedMenuButton = target.closest('.menu-button');

    if (clickedMenuButton) {
      return;
    }

    if (this.sidebarOpen) {
      this.closeSidebar();
    }
  }
}
