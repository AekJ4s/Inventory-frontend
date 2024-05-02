import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import transactions from "../models/transactions";
import transactionTypes from "../models/transactionTypes";

@Injectable({
    providedIn: 'root',
})
export class TransactionTypeService {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:5206/transactiontype';

    ViewTransectionType(){
        return this.http.get<transactionTypes[]>(`${this.baseURL}`)
    }

    get(id:number|string){
        return this.http.get<transactionTypes>(`${this.baseURL}/GetBy/${id}`)
    }
    
    post(transaction:transactionTypes){
        return this.http.post<transactionTypes>(`${this.baseURL}`,transaction)
    }

    PUT(transaction:transactionTypes){
        return this.http.put<transactionTypes>(`${this.baseURL}`,transaction)
    }

    CancelTransaction(id:number|string){
        return this.http.delete<transactionTypes>(`${this.baseURL}/${id}`)
    }
}