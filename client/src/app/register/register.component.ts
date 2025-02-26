import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private accountService = inject(AccountsService);
  cancelRegister = output<boolean>();

  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.cancel();
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
