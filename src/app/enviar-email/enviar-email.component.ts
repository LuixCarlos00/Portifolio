//import { el } from 'date-fns/locale';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import swal from 'sweetalert';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']
})
export class EnviarEmailComponent implements OnInit {

  ngOnInit() {
    emailjs.init('Ohii6Rgm12xly6gxv');
  }

  sendEmail(form: NgForm) {
    const templateParams = {
      from_name: form.value.toName,
      to_email: form.value.toEmail,
      message: form.value.toMessage
    };

    if (templateParams.from_name === '' || templateParams.to_email === '' || templateParams.message === '') {
      swal('Erro ao enviar o email!', 'Por favor, verifique se todos os campos foram preenchidos corretamente.', 'error');
    } else {

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



}
