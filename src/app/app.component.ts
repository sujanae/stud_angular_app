import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-register></app-register>`, // Include RegisterComponent in template
  imports: [RegisterComponent]  // Import standalone RegisterComponent
})
export class AppComponent {}
