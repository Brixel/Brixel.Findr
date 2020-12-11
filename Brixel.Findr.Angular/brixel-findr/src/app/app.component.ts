import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { PlayEvent } from "./components/play/play.component";
import { CurrentGameDTO } from './shared/currentgame.dto';
import { GameStateStore } from './shared/game.state.store';
import { CurrentPlayerDTO } from "./shared/currentplayer.dto";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "brixel-findr";

  currentPlayer: CurrentPlayerDTO;

  constructor(public gameStateStore: GameStateStore) {}

  onPlayClicked(playEvent: PlayEvent) {
      }

  onGameJoined(gameId:string){
    
  }
}

