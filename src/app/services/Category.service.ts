import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import catigories from "../models/catigories";

@Injectable({
    providedIn: 'root',
})
export class  CategoryServices {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:5206/category';

    ViewCatigories(){
        return this.http.get<catigories[]>(`${this.baseURL}`)
    }

    get(id:number|string){
        return this.http.get<catigories>(`${this.baseURL}/${id}`)
    }
    
    CreateCategory(category:catigories){
        return this.http.post<catigories>(`${this.baseURL}`,category)
    }

    put(category:catigories){
        return this.http.put<catigories>(`${this.baseURL}`,category)
    }

    delete(id:number|string){
        return this.http.delete<catigories>(`${this.baseURL}/${id}`)
    }
    
}