import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ResponseMessage } from "../models/responsemessage.model";
import { AppService } from 'src/modules/shared/models/service.model';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsService implements AppService<Contact, ResponseMessage, number>{

    constructor(private _http: HttpClient, @Inject('API_URL') private baseUrl: string) {
        console.log('contact service created')
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