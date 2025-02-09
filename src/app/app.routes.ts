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
    {path:'',component: HomeComponent},
    { path: 'packages', component: PackagesComponent },
    { path: 'packages/:id', component: PackageDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'blogs/:id', component: BlogDetailComponent },
    { path: 'blogs', component: BlogListComponent },
    { path: 'trending/:place', component: TrendingDetailsComponent },
];
