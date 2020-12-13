import { Component, OnInit } from '@angular/core';
import { GameStateStore } from '../../shared/game.state.store';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  constructor(private gameStateStore: GameStateStore) { }

  ngOnInit(): void {
  }

  onCreateGame(){
    this.gameStateStore.create().subscribe();
  }

}
