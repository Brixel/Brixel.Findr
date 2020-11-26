import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  gamecontrol = new FormControl('', [Validators.required]);
  playercontrol = new FormControl('', [Validators.required]);

  @Output() playClicked = new EventEmitter<PlayEvent>();

  constructor() { }

  ngOnInit() {

  }

  onPlay(){
    const playEvent = <PlayEvent>{
      playerId: this.playercontrol.value,
      gameId: this.gamecontrol.value
    }
    console.log(playEvent);
    this.playClicked.emit(playEvent);
  }

}

export interface PlayEvent{
  playerId: string;
  gameId: string;
}