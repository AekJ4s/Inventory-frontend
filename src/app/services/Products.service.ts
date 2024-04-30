import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import products from "../models/products";

@Injectable({
    providedIn: 'root',
})
export class ProductServices {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:5206/products';

    GetAllProduct(){
        return this.http.get<products[]>(`${this.baseURL}`)
    }

    get(id:number|string){
        return this.http.get<products>(`${this.baseURL}/${id}`)
    }
    
    post(products:products){
        return this.http.post<products>(`${this.baseURL}`,products)
    }

    PUT(products:products){
        return this.http.put<products>(`${this.baseURL}/products/UpdateProduct/:id`,products)
    }

    DeleteProduct(id:number|string){
        return this.http.delete<products>(`${this.baseURL}?id=${id}`)
    }
}