import { Component, OnInit } from '@angular/core';
import { Experiencias } from '../Opcoes/Info';
import { ExperienceItem } from '../core/models';

@Component({
  selector: 'app-Experiencias',
  templateUrl: './Experiencias.component.html',
  styleUrls: ['./Experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  readonly experiencias: ExperienceItem[] = Experiencias;

  constructor() {}

  ngOnInit(): void {}
}
