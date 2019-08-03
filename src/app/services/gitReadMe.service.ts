import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GitReadMe } from '../models/gitReadMe';
import { IGitReadMe } from '../models/IGitReadMe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitReadMeService {
    constructor(private http: HttpClient) {}

    public get(gitLibrary: string): Observable<GitReadMe> {
        gitLibrary = gitLibrary.replace('_', '-');
        return this.http.get<IGitReadMe>(`https://api.github.com/repos/jldunsmore/${gitLibrary}/readme`).pipe(
            map(readMe => new GitReadMe(readMe))
        );
    }
}
