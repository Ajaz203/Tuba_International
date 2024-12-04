import { Component, HostListener } from '@angular/core';
import { userDashboard } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { UserDashboardSecurityComponent } from './user-dashboard-security/user-dashboard-security.component';
import { UserDashboardBookmarkComponent } from './user-dashboard-bookmark/user-dashboard-bookmark.component';
import { UserDashboardCardsComponent } from './user-dashboard-cards/user-dashboard-cards.component';
import { UserDashboardBookingComponent } from './user-dashboard-booking/user-dashboard-booking.component';
import { UserDashboardProfileComponent } from './user-dashboard-profile/user-dashboard-profile.component';
import { UserDashboardDetailsComponent } from './user-dashboard-details/user-dashboard-details.component';
import { UserDashboardTabComponent } from './user-dashboard-tab/user-dashboard-tab.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrl: './user-dashboard.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, UserDashboardTabComponent, UserDashboardDetailsComponent, UserDashboardProfileComponent, UserDashboardBookingComponent, UserDashboardCardsComponent, UserDashboardBookmarkComponent, UserDashboardSecurityComponent, FooterComponent, LayoutComponent]
})
export class UserDashboardComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'dashboard';
  public parent = 'Home';
  public child = 'dashboard';

  public userDashboardDetails: userDashboard;
  public activeTab: string = 'dashboard';

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;

    if (number > 595) {
      this.isStuck = true;
      this.isNotStuck = false;
    }else {
      this.isStuck = false
    }
    if(number > 805){
      this.isNotStuck = true;
      this.isStuck = false;
    }
   }

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.userDashboardDetails = response.otherPages.userDashboard;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
