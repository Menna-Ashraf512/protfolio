import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';
import { ContactComponent} from './core/pages/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, 
    {path:'home', component:HomeComponent}, 
    {path:'about', component:AboutComponent}, 
    {path:'projects', component:ProjectsComponent}, 
    {path:'contact', component:ContactComponent}, 
    {path:'**', component:NotfoundComponent}, 

];
