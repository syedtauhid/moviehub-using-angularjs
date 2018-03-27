import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    apiEndpoint:string = "http://localhost:8080/api";

    constructor(private http: HttpClient) { }

    getAllMovies() {
        let endpoint = this.apiEndpoint + "/movies";
        return this.http.get(endpoint);
    }

    getGenreDetails(id) {
        let endpoint = this.apiEndpoint + "/genre/" + id;
        return this.http.get(endpoint);
    }

    getMovieDetails(id) {
        let endpoint = this.apiEndpoint + "/movie/" + id;
        return this.http.get(endpoint);
    }

}