import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private jsonUrl = 'assets/blogs.json';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.jsonUrl);
  }
}