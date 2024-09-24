import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExemplosPortifolioComponent } from './Exemplos-Portifolio/Exemplos-Portifolio.component';
import { PortfolioItem, Portifolio } from '../Opcoes/Portifolio';

@Component({
  selector: 'app-Portifolio',
  templateUrl: './Portifolio.component.html',
  styleUrls: ['./Portifolio.component.css']
})

export class PortifolioComponent implements OnInit {



  portfolioItems: PortfolioItem[] = Portifolio;
  visibleItems: PortfolioItem[] = [];
  currentPage = 0;
  itemsPerPage = 3;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.visibleItems = this.portfolioItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.portfolioItems.length) {
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

  openMenu(codigo: number) {
     const dialogRef = this.dialog.open(ExemplosPortifolioComponent, {
      data: { codigo: codigo },
      width: '80%',
      height: '80%'
    });
  }
}
