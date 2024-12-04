import { Component } from '@angular/core';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BlogsComponent } from '../widgets/blogs/blogs.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-blog-no-sidebar',
    templateUrl: './blog-no-sidebar.component.html',
    styleUrl: './blog-no-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, BlogsComponent, FooterComponent, LayoutComponent]
})
export class BlogNoSidebarComponent {
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
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
