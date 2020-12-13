import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';
import { PlayComponent } from './components/play/play.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { PlayersOverviewComponent } from './components/players-overview/players-overview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [GameOverviewComponent,
    PlayComponent,
    CreateGameComponent,
    GameListComponent,
    PlayersOverviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
  ]
})
export class GameModule { }
