import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Loader } from '@googlemaps/js-api-loader';
import { CurrentGameDTO } from 'src/app/app.component';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  safeURL: any;
  loader: Loader;
  panorama: google.maps.StreetViewPanorama;

  constructor() { 
    this.loader = new Loader({
      apiKey: "",
      version: "weekly"
    });
  }

  private _currentGame: CurrentGameDTO;
  @Input() set currentGame(value: CurrentGameDTO){
    this._currentGame = value;
    this.openStreetView();
  };
  get currentGame(){
    return this._currentGame;
  }


  ngOnInit() {
    this.loader.load();
  }

  private openStreetView(){
    const position = { 
      lat: this.currentGame.player.location.latitude, 
      lng: this.currentGame.player.location.longitude 
    };
    this.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano") as HTMLElement,
      {
        position: position,
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
      }
    );
  }

}
