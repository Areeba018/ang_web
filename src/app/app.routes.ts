import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default home page
    { path: 'features', component: FeaturesComponent }, // Ye tabhi open hoga jab click hoga
    { path: '**', redirectTo: '' } // 404 ke liye
];
