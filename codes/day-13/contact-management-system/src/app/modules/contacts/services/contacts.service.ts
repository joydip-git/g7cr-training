import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ResponseMessage } from "../models/responsemessage.model";

import { Contact } from '../models/contact.model';
import { AppService } from '../../shared/models/service.model';

@Injectable()
export class ContactsService implements AppService<Contact, ResponseMessage>{

    constructor(private _http: HttpClient, @Inject('API_URL') private baseUrl: string) {
        console.log('contact service created')
    }
    remove<TId>(id: TId): Observable<ResponseMessage> | undefined {
        return this._http.delete(`${this.baseUrl}/contact/delete/${id}`).pipe(map(resp => <ResponseMessage>resp))
    }
    get<TId>(id: TId): Observable<ResponseMessage> | undefined {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/contact/${id}`)
    }

    getAll(): Observable<ResponseMessage> {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/contacts`)
    }
    add(data: Contact): Observable<ResponseMessage> {
        return this._http.post<ResponseMessage>(`${this.baseUrl}/contact/add`, data)
    }
    update(data: Contact): Observable<ResponseMessage> {
        throw new Error('Method not implemented.');
    }
}