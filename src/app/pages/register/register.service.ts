import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user): Observable<void> {
    // tslint: disable-next-line:no-trailing-whitespace
    return this.http
    .post<void>(environment.endpoint.register, user)
    .pipe(
      retry(2)
    );
  }
}
