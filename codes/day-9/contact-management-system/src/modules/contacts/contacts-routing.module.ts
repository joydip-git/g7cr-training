import { NgModule, OnDestroy } from "@angular/core";
import { RouterModule } from "@angular/router";
import { contactRoutes } from "./contacts.routes";

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule implements OnDestroy {
    constructor() {
        console.log('contact routing module created')
    }
    ngOnDestroy(): void {
        console.log('contact routing module destroyed')
    }
}