import { Component, OnInit } from '@angular/core';
import { sobre } from '../Opcoes/Info';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  sobre = sobre;
  constructor() { }

  ngOnInit() {
  }

}
