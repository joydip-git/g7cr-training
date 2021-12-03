import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
        console.log('app routing module created')
    }
}