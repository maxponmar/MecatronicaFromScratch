
export interface Information {
  title: string;
  link: string;
  category: string;
  description: string;
  imageUrl: string;
  imageText: string;
  imageLink: string;
  articles: Article[];
}

export interface Article {
  title: string;
  sections: Section[];
}

export interface Section {
  title: string;
  id: number;
  content: string;
  imagePath?: string;
}
