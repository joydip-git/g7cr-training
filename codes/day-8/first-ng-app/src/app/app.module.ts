import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AuthenticationModule } from "./authentication/authentication.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AuthenticationModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}