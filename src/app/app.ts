import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Header, 
    Navbar, 
    Home, 
    About,
    Projects,
    Resume,
    Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioWebsite');
  activeSection = 'home';

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'projects', 'resume', 'contact'];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) { 
          this.activeSection = section;
        }
      }
    }
  }
  
}
