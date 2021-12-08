import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { contactRoutes } from "./contacts.routes";

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {
    constructor() {
        console.log('contact routing module created')
    }
}