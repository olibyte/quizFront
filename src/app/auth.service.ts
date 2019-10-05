import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    register(credentials) {
        this.http.post<any>(`https://localhost:44342/api/account`, credentials).subscribe(res => {
            localStorage.setItem('token', res)
        });
    }
}