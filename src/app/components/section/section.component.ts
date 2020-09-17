import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Category } from 'src/app/models/database.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  category: Category;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.category = this.databaseService.getCategoryByLink( params.get('category') );
    // });
    this.category = this.databaseService.getCategoryByLink(this.route.snapshot.params.category);
  }
}
