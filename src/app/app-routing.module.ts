import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './component/history/history.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'history', component: HistoryComponent },
];

export const routing = RouterModule.forRoot(routes);
