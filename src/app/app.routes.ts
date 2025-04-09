import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { BookDemoFormComponent } from './components/book-demo-form/book-demo-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default home page
    { path: 'features', component: FeaturesComponent }, // Features page
    { path: 'book-a-demo', component: BookDemoFormComponent }, // Book a Demo page
    { path: '**', redirectTo: '' } // Catch-all route for 404
];
