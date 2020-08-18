import { Injectable } from '@angular/core';
import { Information } from '../models/article.model';
import articles from '../../assets/articles.json';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public information: Information[];

  constructor() {
    this.information = articles;
    /* console.log(this.information[0].title); */
  }


}
