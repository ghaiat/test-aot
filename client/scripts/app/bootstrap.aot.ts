import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from '../../../aot/client/scripts/app/module.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
