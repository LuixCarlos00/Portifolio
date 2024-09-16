import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificadosComponent } from './Certificados/Certificados.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  download() {
    const link = document.createElement('a');
    link.href = '../../assets/imagens/Luiz Carlos (1).pdf';
    link.download = 'luiz-carlos-cv.pdf';
    link.click();
  }

  openMenu() {
    const dialogRef = this.dialog.open(CertificadosComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
