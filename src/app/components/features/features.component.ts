import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ MUST ADD

@Component({
  selector: 'app-features',
  imports: [RouterModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

}
