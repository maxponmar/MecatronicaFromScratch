import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public databaseService: DatabaseService) {

  }

  ngOnInit(): void {
  }

}
