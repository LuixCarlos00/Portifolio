import { Component, OnInit } from '@angular/core';
import { Esperiencia } from '../Opcoes/Info';

@Component({
  selector: 'app-Experiencias',
  templateUrl: './Experiencias.component.html',
  styleUrls: ['./Experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  Esperiencia = Esperiencia;
  constructor() { }

  ngOnInit() {
  }

}
