import { Observable } from "rxjs";

export abstract class AppService<TInput, TResponse, TId> {
    abstract getAll(): Observable<TResponse> | undefined;
    abstract remove(id: TId): Observable<TResponse> | undefined;
    abstract add(data: TInput): Observable<TResponse> | undefined;
    abstract get(id: TId): Observable<TResponse> | undefined;
    abstract update(data: TInput): Observable<TResponse> | undefined;
}


// export interface IAppService<TInput, TResponse, TId> {
//     getAll(): Observable<TResponse> | undefined;
//     remove(id: TId): Observable<TResponse> | undefined;
//     add(data: TInput): Observable<TResponse> | undefined;
//     get(id: TId): Observable<TResponse> | undefined;
//     update(data: TInput): Observable<TResponse> | undefined;
// }