import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "../main.component";
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "../components/header/header.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {RolesComponent} from "../components/roles/roles.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        NavbarComponent,
        NotFoundComponent,
        RolesComponent,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule
    ]
})
export class MainModule {
}
