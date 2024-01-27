import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./projets.component.html",
    styleUrls: ["./projets.component.css"]
})
export class ProjetsComponent {

}
