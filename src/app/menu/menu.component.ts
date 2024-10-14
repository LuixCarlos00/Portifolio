import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakeComponent } from './snake/snake.component';
import { Router } from '@angular/router';
import { PortfolioItem, Portifolio } from '../Opcoes/Portifolio';
import { CertificadoModalComponent } from '../CertificadoModal/CertificadoModal.component';
import { Certificados } from '../Opcoes/Certificados';
import { ExemplosPortifolioComponent } from '../Exemplos-Portifolio/Exemplos-Portifolio.component';
import { Esperiencia, Imagens, sobre } from '../Opcoes/Info';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EnviarEmailComponent } from '../enviar-email/enviar-email.component';
import { SanitizerService } from '../service/sanitizer.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  [x: string]: any;
  portfolioItems: PortfolioItem[] = Portifolio;
  safeHtmlDescriptions: SafeHtml[] = [];

  visibleItems: PortfolioItem[] = [];
  currentPage = 0;
  itemsPerPage = 3; // Valor inicial para desktops


  Esperiencia = Esperiencia;
  IMAGENS = Imagens;

  constructor(public dialog: MatDialog, public router: Router,private sanitizer: DomSanitizer,
    private sanitizerService: SanitizerService // Injeção do serviço

  ) {
    this.safeHtmlDescriptions = this.portfolioItems.map(item =>
      this.sanitizer.bypassSecurityTrustHtml(item.description)
    );
  }


  ngOnInit(): void {
   }


  iniciarJogo() {
    const dialogRef = this.dialog.open(SnakeComponent, {
      width: '300px',
      height: '400px',
    });
  }

  download() {
    const link = document.createElement('a');
    link.href = '../../assets/imagens/Luiz_Carlos-Cv.pdf';
    link.download = 'luiz-carlos-cv.pdf';
    link.click();
  }





  openProject(codigo: number) {
    const dialogRef = this.dialog.open(ExemplosPortifolioComponent, {
      data: { codigo: codigo },
      width: '80%',
      height: '80%',
    });
  }

  sanitize(html: string): string {
    return this.sanitizerService.sanitize(html);
  }

  contato() {
    const dialogRef = this.dialog.open(EnviarEmailComponent, {
      width: '300px',
      height: '400px',
    });
  }
} //https://www.thingiverse.com/thing:6764614
