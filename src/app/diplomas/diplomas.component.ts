import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificadoModalComponent } from '../CertificadoModal/CertificadoModal.component';
import { Diplomas } from '../Opcoes/Diplomas';
import { Diploma } from '../core/models';

@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.css']
})
export class DiplomasComponent implements OnInit {
  readonly diplomas: Diploma[] = Diplomas;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  abrirDiploma(diploma: Diploma): void {
    this.dialog.open(CertificadoModalComponent, {
      data: { certificateImage: diploma.imagemUrl },
      panelClass: 'custom-modal-container'
    });
  }
}
