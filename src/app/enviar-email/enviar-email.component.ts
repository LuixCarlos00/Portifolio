import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-enviar-email',
   templateUrl: './enviar-email.component.html',
  styleUrl: './enviar-email.component.css'
})
export class EnviarEmailComponent {

  // Método para enviar o e-mail
  sendEmail(form: NgForm) {
    // Defina os parâmetros do seu template
    const templateParams = {
      to_name: form.value.toName,
      from_name: form.value.fromName,
      message: form.value.message
    };

    // Envie o e-mail usando EmailJS
    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response: EmailJSResponseStatus) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
      }, (err) => {
        console.error('Falha ao enviar o e-mail...', err);
      });
  }
}
