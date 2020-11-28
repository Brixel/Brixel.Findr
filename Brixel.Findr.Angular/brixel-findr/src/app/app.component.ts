import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { PlayEvent } from "./components/play/play.component";
import { CurrentGameDTO } from './shared/currentgame.dto';
import { GameStateStore } from './shared/game.state.store';
import { PlayerDTO } from './shared/player.dto';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "brixel-findr";

  currentPlayer: PlayerDTO;

  constructor(private gameStateStore: GameStateStore) {}

  onPlayClicked(playEvent: PlayEvent) {
      }

  onGameJoined(gameId:string){
    if(this.gameStateStore.state.player){
      this.currentPlayer = this.gameStateStore.state.player;
    }
  }
}

