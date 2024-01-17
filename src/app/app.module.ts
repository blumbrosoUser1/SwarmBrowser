import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {NetworksComponent} from "./components/networks/networks.component";
import {ServicesComponent} from "./components/services/services.component";
import {UniversalRelativeInterceptor} from "./interceptors/universal-relative.interceptor";
import {REQUEST} from "@nguniversal/express-engine/tokens";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
    declarations: [
        AppComponent,
        NetworksComponent,
        ServicesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UniversalRelativeInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
