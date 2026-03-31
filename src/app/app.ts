import { AfterViewInit, Component, HostListener, signal } from '@angular/core';
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
    // RouterOutlet, 
    // Header, 
    Navbar, 
    Home, 
    About,
    Projects,
    // Resume,
    Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected readonly title = signal('PortfolioWebsite');
  activeSection = 'home';

  ngAfterViewInit() {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));
}
  
}
