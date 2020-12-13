import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GameStateStore } from '../../shared/game.state.store';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  gamecontrol = new FormControl('', [Validators.required]);
  playercontrol = new FormControl('', [Validators.required]);

  @Output() playClicked = new EventEmitter<PlayEvent>();

  constructor(private gameStateStore: GameStateStore) { }

  ngOnInit() {

  }

  onPlay(){
    this.gameStateStore.play(this.gamecontrol.value, this.playercontrol.value);
  }

}

export interface PlayEvent{
  playerId: string;
  gameId: string;
}