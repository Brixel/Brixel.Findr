import { Component, OnInit } from '@angular/core';
import { CurrentPlayerDTO } from '../../shared/currentplayer.dto';
import { GameStateStore } from '../../shared/game.state.store';
import { PlayEvent } from '../play/play.component';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss']
})
export class GameOverviewComponent implements OnInit {
  ngOnInit(): void {
  }
  currentPlayer: CurrentPlayerDTO;

  constructor(public gameStateStore: GameStateStore) {}

  onPlayClicked(playEvent: PlayEvent) {
      }

  onGameJoined(gameId:string){
    
  }
}
