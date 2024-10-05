 import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import swal from 'sweetalert';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']  // Corrigido para styleUrls
})
export class EnviarEmailComponent implements OnInit {

  ngOnInit() {
    emailjs.init('Ohii6Rgm12xly6gxv'); // Inicialização com a chave pública
  }

  sendEmail(form: NgForm) {
    const templateParams = {
       from_name: form.value.toName,
      to_email: form.value.toEmail, // Corrigido para to_email
      message: form.value.toMessage
    };

    emailjs.send('service_yah7w5u', 'template_wb5vqkm', templateParams)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        swal('Email enviado com sucesso!', 'Obrigado por entrar em contato!', 'success');
      }, (error) => {
         swal('Erro ao enviar o email!', 'Por favor, tente novamente mais tarde.', 'error');
        console.log('FAILED...', error);
      });
  }
}
