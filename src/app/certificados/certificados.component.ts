import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificadoModalComponent } from '../CertificadoModal/CertificadoModal.component';
import { Certificados } from '../Opcoes/Certificados';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  cards = Certificados;

  constructor(public dialog: MatDialog, ) { }

  ngOnInit() {
  }


  openCertificate(card: any): void {
    this.dialog.open(CertificadoModalComponent, {
      data: { certificateImage: card.Certificado },
      panelClass: 'custom-modal-container', // Classe CSS personalizada para o modal
    });
  }
}
