import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ImageModal',
  templateUrl: './ImageModal.component.html',
  styleUrls: ['./ImageModal.component.css']
})
export class ImageModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: { mediaUrl: string, isVideo: boolean }) {}

  ngOnInit() {}
}
