import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './projects/projects';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioWebsite');

}
