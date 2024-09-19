import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificadosComponent } from '../Certificados/Certificados.component';
import { SnakeComponent } from './snake/snake.component';

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
    link.href = '../../assets/imagens/Luiz Carlos .pdf';
    link.download = 'luiz-carlos-cv.pdf';
    link.click();
  }

  openMenu() {
    const dialogRef = this.dialog.open(CertificadosComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  iniciarJogo() {
     const dialogRef = this.dialog.open(SnakeComponent,{
      width: '405px',
      height: '470px',

     })
    }

}
