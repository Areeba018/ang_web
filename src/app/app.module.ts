import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { routes } from './app.routes'; // ✅ Routes import



@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes), FeaturesComponent ],
  providers: [NavbarComponent, FooterComponent],
})
export class AppModule { }
