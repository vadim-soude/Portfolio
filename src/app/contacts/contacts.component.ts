import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./contacts.component.html",
    styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent {

}
