import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakeComponent } from './snake/snake.component';
import { Router } from '@angular/router';
import { PortfolioItem, Portifolio } from '../Opcoes/Portifolio';
import { CertificadoModalComponent } from '../CertificadoModal/CertificadoModal.component';
import { Certificados } from '../Opcoes/Certificados';
import { ExemplosPortifolioComponent } from '../Exemplos-Portifolio/Exemplos-Portifolio.component';
import { Esperiencia, Imagens, sobre } from '../Opcoes/Info';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  [x: string]: any;
  portfolioItems: PortfolioItem[] = Portifolio;
  visibleItems: PortfolioItem[] = [];
  currentPage = 0;
  itemsPerPage = 3; // Valor inicial para desktops
  cards = Certificados;

  sobre = sobre;
  Esperiencia = Esperiencia;
  IMAGENS = Imagens;

  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit() {
    this.updateItemsPerPage();
    this.updateVisibleItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItemsPerPage();
    this.updateVisibleItems();
  }

  updateItemsPerPage() {
    const LarguraPagina = window.innerWidth;
    if (LarguraPagina <= 768) {
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 3;
    }
  }

  updateVisibleItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.visibleItems = this.portfolioItems.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  nextPage() {
    if (
      (this.currentPage + 1) * this.itemsPerPage <
      this.portfolioItems.length
    ) {
      this.currentPage++;
      this.updateVisibleItems();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleItems();
    }
  }

  iniciarJogo() {
    const dialogRef = this.dialog.open(SnakeComponent, {
      width: '300px',
      height: '400px',
    });
  }

  download() {
    const link = document.createElement('a');
    link.href = '../../assets/imagens/Luiz_Carlos.pdf';
    link.download = 'luiz-carlos-cv.pdf';
    link.click();
  }



  openCertificate(card: any): void {
    this.dialog.open(CertificadoModalComponent, {
      data: { certificateImage: card.Certificado },
      panelClass: 'custom-modal-container', // Classe CSS personalizada para o modal
    });
  }

  openProject(codigo: number) {
    const dialogRef = this.dialog.open(ExemplosPortifolioComponent, {
      data: { codigo: codigo },
      width: '80%',
      height: '80%',
    });
  }
}
