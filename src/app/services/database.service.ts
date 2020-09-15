import { Injectable } from '@angular/core';
import { Article, Category } from '../models/database.model';
import database from '../../assets/database.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public database: Category[];

  constructor() {
    this.database = database;
  }

  public getCategoryByLink(categoryUrl: string){
    const foundCategory: Category = database.find((element: Category) => {
      return element.link.includes(categoryUrl);
    });
    return foundCategory;
  }

  public getArticleByLink(categoryUrl: string, articleUrl: string){
    const category: Category = this.getCategoryByLink(categoryUrl);
    const foundArticle: Article =  category.articles.find((element: Article) => {
      return element.link.includes(articleUrl);
    });
    return foundArticle;
  }
}
