import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'projects', component: Projects},
    {path: 'resume', component: Resume},
    {path: 'contact', component: Contact},
    {path: '**', component: Home, pathMatch: 'full' },
];

