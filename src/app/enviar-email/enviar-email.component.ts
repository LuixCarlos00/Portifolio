import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import swal from 'sweetalert';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']
})
export class EnviarEmailComponent implements OnInit {

  private readonly emailConfig = environment.emailjs;

  ngOnInit(): void {
    emailjs.init(this.emailConfig.publicKey);
  }

  sendEmail(form: NgForm): void {
    const templateParams = {
      from_name: form.value.toName?.trim() || '',
      to_email: form.value.toEmail?.trim() || '',
      message: form.value.toMessage?.trim() || ''
    };

    if (!this.isValidForm(templateParams)) {
      swal('Erro ao enviar o email!', 'Por favor, verifique se todos os campos foram preenchidos corretamente.', 'error');
      return;
    }

    this.sendEmailRequest(templateParams, form);
  }

  private isValidForm(params: { from_name: string; to_email: string; message: string }): boolean {
    return params.from_name !== '' && params.to_email !== '' && params.message !== '';
  }

  private sendEmailRequest(templateParams: Record<string, string>, form: NgForm): void {
    emailjs
      .send(this.emailConfig.serviceId, this.emailConfig.templateId, templateParams)
      .then(
        (response: EmailJSResponseStatus) => {
          form.reset();
          swal('Email enviado com sucesso!', 'Obrigado por entrar em contato!', 'success');
        },
        (error: Error) => {
          console.error('Email send failed:', error);
          swal('Erro ao enviar o email!', 'Por favor, tente novamente mais tarde.', 'error');
        }
      );
  }



}
