import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  onHover = false;
  @Input() movie;
  constructor() { }

  ngOnInit() {
  }

  isHover(){
    this.onHover= true;
  }

  isNotHover(){
    this.onHover= false;
  }
}
