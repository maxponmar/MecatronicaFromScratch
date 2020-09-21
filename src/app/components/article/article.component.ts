import { Component, HostListener, OnInit } from '@angular/core';
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
  sections = document.querySelectorAll('section[id]');

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.article = this.databaseService.getArticleByLink(
      this.route.snapshot.params.category,
      this.route.snapshot.params.article);
  }

  @HostListener('window:scroll', ['$event'])
  scrollActive(event){
    const scrollY = window.pageYOffset;
    this.sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.sidebar a[href*='+ sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.sidebar a[href*='+ sectionId + ']').classList.remove('active');
        }
    });
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  scroll(id: string) {
    document.getElementById(id).scrollIntoView();
  }
}
