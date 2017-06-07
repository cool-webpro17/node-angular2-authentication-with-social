import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
        "clientId": "77954512562-eftl8up04q1g3aha2mjg5h6bgel9svkk.apps.googleusercontent.com"
    },
    "linkedin": {
        "clientId": "8176r44lz2ewos"
    },
    "facebook": {
        "clientId": "929055083862567",
        // "apiVersion": "<version>" /* like v2.4 */
    }
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Angular2SocialLoginModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
