import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
  stroke: ApexStroke
};

export const activityChart : ChartOptions | any = {
  chart: {
      height: 340,
      type: 'radialBar',
  },
  plotOptions: {
      radialBar: {
          dataLabels: {
              name: {
                  fontSize: '22px',
              },
              value: {
                  fontSize: '22px',
              },
              total: {
                  show: true,
                  label: 'Total',
                  formatter: function () {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 80
                  }
              }
          }
      }
  },
  series: [50, 30, 20],
  labels: ['Completed', 'Upcoming', 'Cancelled'],
  colors:['#fa4962', '#379cf9', '#a264ff'],
  stroke: {
      lineCap: "round",
  }
}


