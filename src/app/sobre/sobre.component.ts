import { Component, OnInit } from '@angular/core';
import { Sobre } from '../Opcoes/Info';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  readonly sobre = Sobre;

  constructor() {}

  ngOnInit(): void {}
}
