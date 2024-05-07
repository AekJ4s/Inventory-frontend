import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import login from "../models/login";

@Injectable({
    providedIn: 'root',
})
export class  LoginServices {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:5206/api/Login';


    Post(login:login){
        return this.http.post<login>(`${this.baseURL}`,login)
    }

   
    
}