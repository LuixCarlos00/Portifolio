import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { CertificadosComponent } from './Certificados/Certificados.component';
import { ExperienciasComponent } from './Experiencias/Experiencias.component';
import { PortifolioComponent } from './Portifolio/Portifolio.component';
import { MatCardModule } from '@angular/material/card';
import { ExemplosPortifolioComponent } from './Portifolio/Exemplos-Portifolio/Exemplos-Portifolio.component';
import { ImageModalComponent } from './Portifolio/Exemplos-Portifolio/ImageModal/ImageModal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CertificadoModalComponent } from './Certificados/CertificadoModal/CertificadoModal.component';
import { SobreComponent } from './Sobre/Sobre.component';
 import { SnakeComponent } from './menu/snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CertificadosComponent,
    ExperienciasComponent,
    PortifolioComponent,
    ExemplosPortifolioComponent,
    ImageModalComponent,
    CertificadoModalComponent,
    SobreComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
