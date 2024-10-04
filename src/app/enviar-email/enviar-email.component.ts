import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-enviar-email',
   templateUrl: './enviar-email.component.html',
  styleUrl: './enviar-email.component.css'
})
export class EnviarEmailComponent {

   sendEmail(form: NgForm) {


    emailjs.send("service_yah7w5u","template_wb5vqkm",{
      Subject: "Oferta de Trabalho",
      name: form.value.toName,
      email: form.value.fromName,
      mensage: form.value.message,
      });




  }
}
