import { Component, OnInit, Input } from '@angular/core';
import {Information} from 'src/app/models/article.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() info: Information;

  constructor() { }

  ngOnInit(): void {
  }

}
