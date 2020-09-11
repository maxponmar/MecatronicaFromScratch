import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  section: string;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.section = this.databaseService.getCategoryByLink( params.get('name') );
    });
  }
}
