import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const routes = {
    plan: (c: PlanContext) => `/planes/${c.id}`,
    planes: () => `/planes`
};

export interface PlanContext {
    id: number;
}

export interface Plan {
    id: Number,
    imagen: String,
    titulo: String,
    descripcion: String,
    rating: number,
    fecha_ida: Date,
    fecha_regreso: Date,
    precioMinimo: Number,
    totalDias: any,
    totalNoches: any
};

@Injectable({
    providedIn: 'root'
})
export class PlanService {
    constructor(private http: HttpClient) { }

    create(Plan: Plan): Observable<Plan> {
        return this.http.post<Plan>(routes.planes(), Plan).pipe(
            tap((Plan: Plan) =>
                this.log(`added contact w/ id=${Plan.titulo}`)
            ),
            catchError(this.handleError<Plan>('create'))
        );
    }

    get(): Observable<any> {
        return this.http.get<any>(environment.domain + `planes/`);
    }

    getById(id: Number): any {
        return this.http.get<any>(environment.domain + `planes/${id}/`);
    }

    /**
     * Temporal file with plans data 
     */
    public getJSON(): Observable<any> {
        return this.http.get("./assets/planes.json");
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

    private log(message: string) { }
}