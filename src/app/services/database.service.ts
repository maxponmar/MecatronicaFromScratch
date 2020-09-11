import { Injectable } from '@angular/core';
import { Category } from '../models/database.model';
import database from '../../assets/database.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public database: Category[];

  constructor() {
    this.database = database;
  }

  public getCategoryByLink(link: string){
    const found: Category = database.find((element: Category) => {
      return element.link.includes(link);
    });
    return found.title;
  }
}
