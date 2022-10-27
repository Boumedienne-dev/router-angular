import { Routes } from "@angular/router";
import { ContactComponent } from "./app/contact/contact.component";
import { HomeComponent } from "./app/home/home.component";

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
];

export { ROUTES };