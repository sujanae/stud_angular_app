import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import AppComponent
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent if it's standalone

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Import standalone AppComponent here
    RegisterComponent // Import RegisterComponent if it's standalone
  ],
  providers: [],
})
export class AppModule {}
