import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificadoModalComponent } from '../CertificadoModal/CertificadoModal.component';
import { Certificados } from '../Opcoes/Certificados';
import { Certificate } from '../core/models';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  readonly cards = Certificados;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openCertificate(card: Certificate): void {
    this.dialog.open(CertificadoModalComponent, {
      data: { certificateImage: card.certificateImage },
      panelClass: 'custom-modal-container'
    });
  }
}
