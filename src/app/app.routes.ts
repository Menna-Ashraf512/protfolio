import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { AboutComponent } from './core/pages/about/about.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, 
    {path:'home', component:HomeComponent}, 
    {path:'about', component:AboutComponent}, 
];
