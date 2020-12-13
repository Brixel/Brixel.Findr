import { Component, Input, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { PlayerDTO } from '../../shared/player.dto';

@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.scss']
})
export class PlayersOverviewComponent implements OnInit {
  @Input() players: PlayerDTO[];
  @Input() gameId :string;
  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }
}
