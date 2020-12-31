import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { tap } from 'rxjs/operators';
import { ConfigurationService } from 'src/app/modules/core/configuration.service';
import { CurrentPlayerDTO } from '../../shared/currentplayer.dto';
import { GameStateStore } from '../../shared/game.state.store';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  safeURL: any;
  loader: Loader;
  panorama: google.maps.StreetViewPanorama;

  constructor(public gameStateStore: GameStateStore, private route: ActivatedRoute, private configurationService: ConfigurationService) {
    this.loader = new Loader({
      apiKey: this.configurationService.configuration.googleMapsKey,
      version: "weekly"
    });

  }

  currentPlayer: CurrentPlayerDTO;


  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('gameId');
    const playerId = this.route.snapshot.paramMap.get('playerId');
    if (!playerId) {
      console.log('Popup new-or-existing-player account')
    }
    if (gameId && playerId)
      this.gameStateStore.play(gameId, playerId).pipe(tap((currentGame => {
        this.currentPlayer = currentGame.currentPlayer;
        this.openStreetView();
      }))).subscribe();

    this.loader.load().then(() => {
      this.panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano") as HTMLElement,

      );
      if (this.currentPlayer) {

        const position = {
          lat: this.currentPlayer.location.latitude,
          lng: this.currentPlayer.location.longitude
        };
        this.panorama.setPosition(position);
      }
      this.panorama.addListener("position_changed", () => {

        const lat = this.panorama.getPosition().lat();
        const lng = this.panorama.getPosition().lng();
        if (this.currentPlayer.location.latitude !== lat && this.currentPlayer.location.longitude !== lng) {
          this.gameStateStore.move(lat, lng);
        }

      });
    });
  }

  private openStreetView() {
    const position = {
      lat: this.currentPlayer.location.latitude,
      lng: this.currentPlayer.location.longitude
    };
    if (this.panorama) {
      this.panorama.setPosition(position);
    }

  }
}
