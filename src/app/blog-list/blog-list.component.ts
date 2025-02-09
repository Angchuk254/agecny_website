// blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Blog } from '../../blog.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: string[] = [];
  selectedCategory = '';
  sortBy = 'recent';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.filteredBlogs = this.getPublishedBlogs();
      this.categories = [...new Set(blogs.map(blog => blog.category))];
    });
  }

  getPublishedBlogs(): Blog[] {
    return this.blogs.filter(blog => new Date(blog.date) <= new Date());
  }

  filterBlogs() {
    let filtered = this.getPublishedBlogs();
    if (this.selectedCategory) {
      filtered = filtered.filter(blog => blog.category === this.selectedCategory);
    }
    this.filteredBlogs = this.sortBy === 'recent' 
      ? [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : [...filtered].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
}
