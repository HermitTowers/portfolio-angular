import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GitReadMe } from '../models/gitReadMe';


@Injectable({
  providedIn: 'root'
})
export class GitReadMeService {
    constructor(private http: HttpClient) {}

    public get(gitLibrary: string): Observable<GitReadMe> {
        gitLibrary = gitLibrary.replace('_', '-');
        return this.http.get<GitReadMe>(`https://api.github.com/repos/jldunsmore/${gitLibrary}/readme`);
    }
}
