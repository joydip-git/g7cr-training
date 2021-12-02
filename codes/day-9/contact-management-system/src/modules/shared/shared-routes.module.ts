import { NgModule, OnDestroy } from "@angular/core";
import { RouterModule } from "@angular/router";
import { sharedRoutes } from "./shared.routes";

@NgModule({
    imports: [RouterModule.forRoot(sharedRoutes)],
    exports: [RouterModule]
})
export class SharedRouteModule implements OnDestroy {
    constructor() {
        console.log('shared routing module created')
    }
    ngOnDestroy(): void {
        console.log('shared module destroyed')
    }
}