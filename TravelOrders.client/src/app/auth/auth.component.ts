import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Material } from '../app.material';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,Material],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor (private authService : AuthService) {}

  

  onSubmit(form : NgForm) {
    console.log(form.value);
    this.authService.login(form.value).subscribe( data => {
      console.log(data);
    });
  }

}
