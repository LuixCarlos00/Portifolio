import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../Opcoes/Info';

@Component({
  selector: 'app-Experiencias',
  templateUrl: './Experiencias.component.html',
  styleUrls: ['./Experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  readonly experiencia = Experiencia;

  constructor() {}

  ngOnInit(): void {}
}
