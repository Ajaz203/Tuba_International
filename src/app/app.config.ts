import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideStore } from '@ngxs/store';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from './app.routes';
import { cabState } from './shared/store/state/cab.state';
import { flightState } from './shared/store/state/flight.state';
import { hotelState } from './shared/store/state/hotel.state';
import { restaurantState } from './shared/store/state/restaurant.state';
import { tourState } from './shared/store/state/tour.state';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideAngularSvgIcon(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
    ),
    provideStore([hotelState, tourState, flightState, cabState, restaurantState], withNgxsStoragePlugin({
      keys: '*'
    })
    ),
  ]
};
