import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'; // Import HttpClient and HttpHeaders

@Component({
  selector: 'app-register',
  standalone: true,  // Mark as standalone
  imports: [FormsModule, HttpClientModule], // Import HttpClientModule here
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
  private apiUrl = 'http://localhost/rigister.php'; // Set your API URL here

  // Inject HttpClient into the constructor
  constructor(private http: HttpClient) {}

  registerStudent() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    // Post request to the PHP server
    this.http.post(this.apiUrl, this.student, { headers }).subscribe(
      (response) => {
        this.message = 'Student registered successfully!';
      },
      (error) => {
        this.message = 'Registration failed!';
        console.error('Error:', error);
      }
    );
  }
}