import { Observable } from "rxjs";

export abstract class AppService<TInput, TResponse, TId> {
    abstract getAll(): Observable<TResponse> | undefined;
    abstract remove(id: TId): Observable<TResponse> | undefined;
    abstract add(data: TInput): Observable<TResponse> | undefined;
    abstract get(id: TId): Observable<TResponse> | undefined;
    abstract update(data: TInput): Observable<TResponse> | undefined;
}