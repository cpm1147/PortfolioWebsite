import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './projects/projects';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioWebsite');

}
