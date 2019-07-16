import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
    constructor(http: HttpClient) {}

    public get(): Observable<string> {
        return of(this.getMainContentBlurb());
    }

    private getMainContentBlurb(): string {
        return '';
    }
}

