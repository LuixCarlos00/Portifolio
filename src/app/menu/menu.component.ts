import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakeComponent } from './snake/snake.component';
import { ExemplosPortifolioComponent } from '../Exemplos-Portifolio/Exemplos-Portifolio.component';
import { EnviarEmailComponent } from '../enviar-email/enviar-email.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private static readonly CV_PATH = 'assets/imagens/Luiz_Carlos-Cv.pdf';
  private static readonly CV_FILENAME = 'luiz-carlos-cv.pdf';
  private static readonly SCROLL_THRESHOLD = 50;

  isScrolled = false;
  isMobileMenuOpen = false;
  currentYear = new Date().getFullYear();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    this.isScrolled = window.scrollY > MenuComponent.SCROLL_THRESHOLD;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  openSnakeGame(): void {
    this.dialog.open(SnakeComponent, {
      width: '350px',
      height: '450px',
      panelClass: 'snake-dialog'
    });
  }

  downloadCurriculum(): void {
    const link = document.createElement('a');
    link.href = MenuComponent.CV_PATH;
    link.download = MenuComponent.CV_FILENAME;
    link.click();
  }

  openProject(projectCode: number): void {
    this.dialog.open(ExemplosPortifolioComponent, {
      data: { codigo: projectCode },
      width: '90%',
      maxWidth: '1000px',
      height: '85%',
      panelClass: 'project-dialog'
    });
  }

  openContactForm(): void {
    this.closeMobileMenu();
    this.dialog.open(EnviarEmailComponent, {
      width: '90%',
      maxWidth: '500px',
      panelClass: 'contact-dialog'
    });
  }
}
