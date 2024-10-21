import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-register',
  standalone: true,  // Mark as standalone
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  student = {
    name: '',
    email: '',
    phone: '',
    course: ''
  };

  message = '';

  registerStudent() {
    // Registration logic
    this.message = 'Student registered successfully!';
  }
}
