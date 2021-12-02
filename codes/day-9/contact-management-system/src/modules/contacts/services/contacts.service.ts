import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { map, Observable } from "rxjs";
import { ResponseMessage } from "../models/responsemessage.model";
import { IAppService } from 'src/modules/shared/models/service.model';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsService implements IAppService<Contact, ResponseMessage, number>{

    // private _http?: HttpClient;
    // constructor(http: HttpClient) {
    //     this._http = http
    // }
    private baseUrl: string;
    private static count: number = 0
    constructor(private _http: HttpClient) {
        ContactsService.count++
        console.log(`ctor: ${ContactsService.count}`)
        this.baseUrl = environment.restfulBaseUrl
    }

    getAll(): Observable<ResponseMessage> {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/contacts`)
    }
    remove(id: number): Observable<ResponseMessage> {
        return this._http.delete(`${this.baseUrl}/contact/delete/${id}`).pipe(map(resp => <ResponseMessage>resp))
    }
    add(data: Contact): Observable<ResponseMessage> {
        throw new Error('Method not implemented.');
    }
    get(id: number): Observable<ResponseMessage> {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/contact/${id}`)
    }
    update(data: Contact): Observable<ResponseMessage> {
        throw new Error('Method not implemented.');
    }
}