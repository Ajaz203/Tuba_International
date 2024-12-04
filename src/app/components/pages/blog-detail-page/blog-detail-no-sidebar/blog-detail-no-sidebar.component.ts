import { Component } from '@angular/core';
import { blogDetailPage, blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BlogDetailsPageComponent } from '../widgets/blog-details-page/blog-details-page.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-blog-detail-no-sidebar',
    templateUrl: './blog-detail-no-sidebar.component.html',
    styleUrl: './blog-detail-no-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, BlogDetailsPageComponent, FooterComponent, LayoutComponent]
})
export class BlogDetailNoSidebarComponent {
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: blogDetailPage;
  public blogFilter: blogFilter[];

  constructor(private pageService: PagesService) {
    this.pageService.pages().subscribe(response => {
      response.blogDetailPage.forEach((data) => {
        this.blogDetails = data;

        response.blogPage.forEach((data) => {
          this.blogFilter = data.blogFilter;
        })
      })
    })
  }
}
