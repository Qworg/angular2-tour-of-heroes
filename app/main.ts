// Imports for loading and configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//Normal Imports
import {bootstrap}	from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent}	from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS, 
    HTTP_PROVIDERS,
        { provide: XHRBackend, useClass: InMemoryBackendService }, //in-mem server
        { provide: SEED_DATA, useClass: InMemoryDataService } //in-mem server data
]);
