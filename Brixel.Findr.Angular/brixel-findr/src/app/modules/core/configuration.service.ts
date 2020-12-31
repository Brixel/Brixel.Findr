import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { shareReplay, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export class ConfigurationService {
    private readonly CONFIG_URL = 'assets/config/config.json';

    private configuration$: Observable<Configuration>;
    public configuration: Configuration;
    constructor(private http: HttpClient) {

    }

    loadConfiguration(){
        if(!this.configuration$){
            this.configuration$ = this.http.get<Configuration>(this.CONFIG_URL)
                .pipe(tap((config => this.configuration = config)))
        }
        return this.configuration$;
    }
}

export interface Configuration{
    apiURL: string;
    googleMapsKey: string;
}