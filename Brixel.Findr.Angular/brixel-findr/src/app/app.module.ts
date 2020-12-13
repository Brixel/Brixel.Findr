import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './modules/game/game.module';
import { ConfigurationService } from './modules/core/configuration.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    GameModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (configService: ConfigurationService) => () => configService.loadConfiguration().toPromise(),
    deps: [ConfigurationService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
