import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('https://tu-backend.com/enviar-correo', this.contactForm.value)
        .subscribe({
          next :() => {
            alert('Correo enviado con éxito!');
            this.contactForm.reset();
          },
          error :(error) => {
            console.error('Error al enviar el correo:', error);
            alert('Ha ocurrido un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
          }
        }
        );
    }
  }
}
