// blog-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../../blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | undefined;
  latestBlogs: Blog[] = [];
  trendingBlogs: Blog[] = [];
  recommendedTours: any[] = []; // Assume tours have { id, name }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.blogService.getBlogs().subscribe(blogs => {
      this.blog = blogs.find(b => b.id === id);

      // Get latest blogs (sorted by date)
      this.latestBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
console.log(this.latestBlogs.forEach(element => {
  console.log(element.id);   
}
));

      // Get trending blogs (hardcoded or based on popularity)
      this.trendingBlogs = blogs.slice(0, 5); // Replace with real trending logic

      // Get recommended tours based on blog category (mock example)
      this.recommendedTours = [
        { id: 1, name: 'Leh-Ladakh Adventure' },
        { id: 2, name: 'Nubra Valley Trek' }
      ];
    });
  }
}
