import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn:'root'
})
export class ApiService {
    constructor(private httClient: HttpClient){}

    /**
     * getSuperMario
     */
    public getSuperMario() {
        return this.httClient.get(environment.amiibo)
    }
}