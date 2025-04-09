import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';  
import { DemoServiceService } from '../../services/demo-service.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  standalone: true,  // Marking it as standalone component
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';

  constructor(private demoService: DemoServiceService) {}
  
  handleGetStarted() {
    console.log('Username from service:', this.demoService.getUsername());
    // Set username through the service
    this.demoService.setUsername('Guest User Started');
    // Update the component's username property
    this.username = this.demoService.getUsername();
  }

}
// Every component defines a selector that determines how the component is used: