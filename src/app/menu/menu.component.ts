import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakeComponent } from './snake/snake.component';
import { ExemplosPortifolioComponent } from '../Exemplos-Portifolio/Exemplos-Portifolio.component';
import { CarouselImages } from '../Opcoes/Info';
import { EnviarEmailComponent } from '../enviar-email/enviar-email.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  private static readonly CV_PATH = 'assets/imagens/Luiz_Carlos-Cv.pdf';
  private static readonly CV_FILENAME = 'luiz-carlos-cv.pdf';

  readonly carouselImages = CarouselImages;

  constructor(private dialog: MatDialog) {}

  openSnakeGame(): void {
    this.dialog.open(SnakeComponent, {
      width: '300px',
      height: '400px'
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
      width: '80%',
      height: '80%'
    });
  }

  openContactForm(): void {
    this.dialog.open(EnviarEmailComponent, {
      width: '300px',
      height: '400px'
    });
  }
}
