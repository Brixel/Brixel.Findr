import { Injectable } from "@angular/core";
import { ConfigurationService } from "../../core/configuration.service";
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class GameClientService {
    private  connection;
    
    public playerMoved$ = new BehaviorSubject<string>(null);


    constructor(private configurationService: ConfigurationService) {
        const baseURL = this.configurationService.configuration.apiURL;
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${baseURL}/hub`, { withCredentials: false})   // mapping to the chathub as in startup.cs
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.connection.on('PlayerMoved', (player) => this.onPlayerMoved(player));
        this.start();    
    }

    private onPlayerMoved(playerId: string){
      this.playerMoved$.next(playerId);
    }

    public async start() {
        try {
          await this.connection.start();
          console.log("connected");
        } catch (err) {
          console.log(err);
          setTimeout(() => this.start(), 5000);
        } 
      }
  }