import { Component } from '@angular/core';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BlogFilterComponent } from '../widgets/blog-filter/blog-filter.component';
import { BlogsComponent } from '../widgets/blogs/blogs.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-blog-masonry-right-sidebar',
    templateUrl: './blog-masonry-right-sidebar.component.html',
    styleUrl: './blog-masonry-right-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, BlogsComponent, BlogFilterComponent, FooterComponent, LayoutComponent]
})
export class BlogMasonryRightSidebarComponent {
  
  public bg_image = 'assets/home/port-bg.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: number[];
  public blogFilter: blogFilter[];

  constructor(private pageService: PagesService) {
    this.pageService.pages().subscribe(response => {
      response.blogPage.forEach((data) => {
        this.blogDetails = data.blog;

        this.blogFilter = data.blogFilter;
      })
    })
  }
}
