import { Component, OnInit } from '@angular/core';
import { shirtList } from '../models/shirt-list.model';
import { ShirtGenderPipe } from '../../filters/shirt-filter';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private shirtList = shirtList;

  constructor() { }

  ngOnInit() {
  }

}
