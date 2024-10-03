import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ExemplosPortifolio } from '../Opcoes/ExemplosPorti';
import { ImageModalComponent } from './ImageModal/ImageModal.component';

@Component({
  selector: 'app-Exemplos-Portifolio',
  templateUrl: './Exemplos-Portifolio.component.html',
  styleUrls: ['./Exemplos-Portifolio.component.css']
})
export class ExemplosPortifolioComponent implements OnInit {
  portfolioItems = ExemplosPortifolio;
  selectedItem: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { codigo: number },
              private dialog: MatDialog) { }

  ngOnInit() {

    this.selectedItem = this.portfolioItems.find(item => item.codigo === this.data.codigo);
  }

  openMedia(mediaUrl: string, isVideo: boolean) {
    this.dialog.open(ImageModalComponent, {
      data: { mediaUrl: mediaUrl, isVideo: isVideo }
    });
  }
}
