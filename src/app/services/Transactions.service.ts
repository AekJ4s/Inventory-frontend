import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import transactions from "../models/transactions";

@Injectable({
    providedIn: 'root',
})
export class Transactionservices {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:5206/transaction';

    ViewTransection(){
        return this.http.get<transactions[]>(`${this.baseURL}`)
    }

    
    get(id:number|string){
        return this.http.get<transactions>(`${this.baseURL}/GetBy/${id}`)
    }
    
    post(transaction:transactions){
        return this.http.post<transactions>(`${this.baseURL}`,transaction)
    }

    PUT(transaction:transactions){
        return this.http.put<transactions>(`${this.baseURL}`,transaction)
    }

    CancelTransaction(id:number|string){
        return this.http.delete<transactions>(`${this.baseURL}/${id}`)
    }
}