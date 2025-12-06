import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface CertificateModalData {
  certificateImage: string;
}

@Component({
  selector: 'app-CertificadoModal',
  templateUrl: './CertificadoModal.component.html',
  styleUrls: ['./CertificadoModal.component.css']
})
export class CertificadoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CertificateModalData) {}
}
