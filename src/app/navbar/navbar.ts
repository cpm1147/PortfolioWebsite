import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  @Input() activeSection: string = 'home';

  isScrolled = false;

  sections = ['home', 'about', 'projects', 'contact'];

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 20;

    let current = '';

    this.sections.forEach(section => {
      const el = document.getElementById(section);
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section;
      }
    });

    if (current) {
      this.activeSection = current;
    }
  }
}
