import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './services/ConfigService';

import { routes } from './app.routes';

export function loadConfigFactory(cfg: ConfigService) {
  return () => cfg.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), 	{
	  provide: APP_INITIALIZER,
	  useFactory: loadConfigFactory,
	  deps: [ConfigService],
	  multi: true
	}]
};
