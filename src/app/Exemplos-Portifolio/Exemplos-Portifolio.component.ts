import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ExemplosPortifolio } from '../Opcoes/ExemplosPorti';
import { ImageModalComponent } from './ImageModal/ImageModal.component';
import { SanitizerService } from '../service/sanitizer.service';
import { PortfolioExample } from '../core/models';

interface ExemplosDialogData {
  codigo: number;
}

@Component({
  selector: 'app-Exemplos-Portifolio',
  templateUrl: './Exemplos-Portifolio.component.html',
  styleUrls: ['./Exemplos-Portifolio.component.css']
})
export class ExemplosPortifolioComponent implements OnInit {
  private readonly portfolioItems = ExemplosPortifolio;
  selectedItem: PortfolioExample | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ExemplosDialogData,
    private dialog: MatDialog,
    private sanitizerService: SanitizerService
  ) {}

  ngOnInit(): void {
    this.selectedItem = this.portfolioItems.find(
      item => item.codigo === this.data.codigo
    );
  }

  openMedia(mediaUrl: string, isVideo: boolean): void {
    this.dialog.open(ImageModalComponent, {
      data: { mediaUrl, isVideo }
    });
  }

  sanitize(html: string): string {
    return this.sanitizerService.sanitize(html);
  }
}
