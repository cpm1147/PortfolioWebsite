import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: '**', redirectTo: '' }
];

