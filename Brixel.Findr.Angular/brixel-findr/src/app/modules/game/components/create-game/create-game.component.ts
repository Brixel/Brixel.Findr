import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { GameStateStore } from '../../shared/game.state.store';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  constructor(private gameStateStore: GameStateStore, private router:Router) { }

  ngOnInit(): void {
  }

  onCreateGame(){
    this.gameStateStore.create().pipe(tap((currentGame => {
      this.router.navigateByUrl(`game/${currentGame.id}/player/${currentGame.currentPlayer.id}`);
    }))).subscribe();
  }

}
