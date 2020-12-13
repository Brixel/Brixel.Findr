import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameOverviewComponent } from "./components/game-overview/game-overview.component";
import { PlayComponent } from "./components/play/play.component";
import { CreateGameComponent } from "./components/create-game/create-game.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { PlayersOverviewComponent } from "./components/players-overview/players-overview.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MapViewComponent } from "./components/map-view/map-view.component";
import { GameRoutingModule } from "./game-routing.module";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { GameLinkComponent } from "./components/game-link/game-link.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    GameOverviewComponent,
    PlayComponent,
    CreateGameComponent,
    GameListComponent,
    PlayersOverviewComponent,
    MapViewComponent,
    GameLinkComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
})
export class GameModule {}
