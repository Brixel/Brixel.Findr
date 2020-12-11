import { Component, Input, OnInit } from '@angular/core';
import { PlayerDTO } from 'src/app/shared/player.dto';

@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.scss']
})
export class PlayersOverviewComponent implements OnInit {
  @Input() players: PlayerDTO[];
  constructor() { }

  ngOnInit(): void {
  }

}
