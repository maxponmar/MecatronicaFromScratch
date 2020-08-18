import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public articulosService: ArticulosService) {

  }

  ngOnInit(): void {
  }

}
