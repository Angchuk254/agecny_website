import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageDetailComponent } from './packages-detail/packages-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TrendingDetailsComponent } from './trending-details/trending-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'packages', loadComponent: () => import('./packages/packages.component').then(m => m.PackagesComponent) },
    { path: 'packages/:id', loadComponent: () => import('./packages-detail/packages-detail.component').then(m => m.PackageDetailComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: 'gallery', loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent) },
    { path: 'about-us', loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent) },
    { path: 'blogs/:id', loadComponent: () => import('./blog-detail/blog-detail.component').then(m => m.BlogDetailComponent) },
    { path: 'blogs', loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent) },
    { path: 'trending/:place', loadComponent: () => import('./trending-details/trending-details.component').then(m => m.TrendingDetailsComponent) },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
  
