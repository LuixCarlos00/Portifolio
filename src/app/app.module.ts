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
  import { MatCardModule } from '@angular/material/card';
 import { ImageModalComponent } from './Exemplos-Portifolio/ImageModal/ImageModal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CertificadoModalComponent } from './CertificadoModal/CertificadoModal.component';
  import { SnakeComponent } from './menu/snake/snake.component';
import { ExemplosPortifolioComponent } from './Exemplos-Portifolio/Exemplos-Portifolio.component';
import { EnviarEmailComponent } from './enviar-email/enviar-email.component';
import { SobreComponent } from './sobre/sobre.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ProjetosComponent } from './Projetos/Projetos.component';
import { ExperienciasComponent } from './Experiencias/Experiencias.component';

@NgModule({
  declarations: [				
    AppComponent,
    MenuComponent,
    ExemplosPortifolioComponent,
    ImageModalComponent,
    CertificadoModalComponent,
     SnakeComponent,
     EnviarEmailComponent,
      SobreComponent,
      CertificadosComponent,
      ProjetosComponent,
      ExperienciasComponent
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
