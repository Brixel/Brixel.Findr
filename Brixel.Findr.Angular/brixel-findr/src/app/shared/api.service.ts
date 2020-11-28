import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService {
    
    baseURL = 'https://localhost:5001';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.httpClient.get(`${this.baseURL}/${url}`, this.httpOptions);
    }

    post(url: string, body: any):Observable<any> {
        return this.httpClient.post(`${this.baseURL}/${url}`, body, this.httpOptions);
    }
}
