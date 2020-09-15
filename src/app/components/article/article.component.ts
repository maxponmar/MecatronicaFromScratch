import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/database.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.article = this.databaseService.getArticleByLink(params.get('category'), params.get('article'));
    });
  }

}
