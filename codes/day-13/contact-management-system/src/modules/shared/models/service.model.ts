import { Observable } from "rxjs";

export abstract class AppService<TInput, TResponse> {
    abstract getAll(): Observable<TResponse> | undefined;
    abstract remove<TId>(id: TId): Observable<TResponse> | undefined;
    abstract add(data: TInput): Observable<TResponse> | undefined;
    abstract get<TId>(id: TId): Observable<TResponse> | undefined;
    abstract update(data: TInput): Observable<TResponse> | undefined;
}