import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';


@Injectable({ providedIn: "root" })
export class AbstractService<T> {

    constructor(private http: HttpClient) { }

    get(path: string): Observable<T> {
        return this.http.get<T>(environment.domain + path);
    }

    getPath(path: string): Observable<T> {
        return this.http.get<T>(path);
    }

    post(path: string, payload: any, callback: CallableFunction): Observable<any> {
        return this.http.post(
            environment.domain + path,
            payload,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            tap((item: T) => callback(item)),
            catchError(this.handleError())
        );
    }

    protected persist(path: string, payload: T): Observable<any> {
        return this.http.post(
            environment.domain + path,
            payload,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            tap((item: T) => this.log(item)),
            catchError(this.handleError())
        );
    }

    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for Plan consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    protected log<T>(item: T) {
        console.log("Resultado: ", item);
    }

}


