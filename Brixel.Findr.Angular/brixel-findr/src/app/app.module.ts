import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { PlayComponent } from './components/play/play.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './components/game-list/game-list.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from  '@angular/material/list';
import { MatInputModule } from  '@angular/material/input';
import { PlayersOverviewComponent } from './components/players-overview/players-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    PlayComponent,
    GameListComponent,
    CreateGameComponent,
    PlayersOverviewComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
