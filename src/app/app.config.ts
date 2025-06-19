import { environment } from '../environments/environment';
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './services/ConfigService';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { routes } from './app.routes';
import { LOCALE_ID } from '@angular/core';

export function loadConfigFactory(cfg: ConfigService) {
	return () => cfg.loadConfig();
}

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideHttpClient(),
	{
		provide: RECAPTCHA_V3_SITE_KEY,
		useValue: environment.recaptchaSiteKey
	}, {
		provide: APP_INITIALIZER,
		useFactory: loadConfigFactory,
		deps: [ConfigService],
		multi: true
	},
	{
		provide: LOCALE_ID,
		useValue: 'fr'
	}]
};
