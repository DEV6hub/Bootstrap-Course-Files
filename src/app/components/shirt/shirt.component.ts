import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {

  @Input() shirt: any;

  constructor() { }

  ngOnInit() {
  }

  renderImage(image) {
    return '../../../assets/images/image';
  }

}
