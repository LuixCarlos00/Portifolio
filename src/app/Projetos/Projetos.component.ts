import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
  import { ExemplosPortifolioComponent } from '../Exemplos-Portifolio/Exemplos-Portifolio.component';
import { PortfolioItem, Portifolio } from '../Opcoes/Portifolio';
import { SanitizerService } from '../service/sanitizer.service';

@Component({
  selector: 'app-Projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  visibleItems: PortfolioItem[] = [];
  currentPage = 0;
  itemsPerPage = 3;
  porvisibleItems: PortfolioItem[] = [];
  portfolioItems: PortfolioItem[] = Portifolio;
  safeHtmlDescriptions: SafeHtml[] = [];

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private sanitizer: DomSanitizer,
    private sanitizerService: SanitizerService
  ) {
    this.safeHtmlDescriptions = this.portfolioItems.map(item =>
      this.sanitizer.bypassSecurityTrustHtml(item.description)
    );
  }

  ngOnInit() {
    this.updateItemsPerPage();
    this.updateVisibleItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItemsPerPage();
    this.updateVisibleItems();
  }

  sanitize(html: string): string {
    return this.sanitizerService.sanitize(html);
  }

  updateItemsPerPage() {
    const pageWidth = window.innerWidth;
    if (pageWidth <= 768) {
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 3;
    }
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

  updateVisibleItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.visibleItems = this.portfolioItems.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  openProject(codigo: number) {
    const dialogRef = this.dialog.open(ExemplosPortifolioComponent, {
      data: { codigo: codigo },
      width: '80%',
      height: '80%',
    });
  }
}
