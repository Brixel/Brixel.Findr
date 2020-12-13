import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';


@Injectable({ providedIn: 'root' })
export class ApiService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    baseURL:string;

    constructor(private httpClient: HttpClient, private configurationService: ConfigurationService) {
        this.baseURL = this.configurationService.configuration.apiURL;
    }

    get(url: string): Observable<any> {
        return this.httpClient.get(`${this.baseURL}/${url}`, this.httpOptions);
    }

    post(url: string, body: any = null):Observable<any> {
        return this.httpClient.post(`${this.baseURL}/${url}`, body, this.httpOptions);
    }
}
