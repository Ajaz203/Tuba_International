import { Component, Input } from '@angular/core';
import { activityChart } from '../../../../../shared/components/data/chart/dashboard-chart';
import { dashboardDetails } from '../../../../../shared/interface/pages';
import { NgClass } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-user-dashboard-details',
    templateUrl: './user-dashboard-details.component.html',
    styleUrl: './user-dashboard-details.component.scss',
    standalone: true,
    imports: [NgApexchartsModule, NgClass]
})
export class UserDashboardDetailsComponent {

  @Input() dashboardDetails: dashboardDetails;

  public activityChart = activityChart;

}
