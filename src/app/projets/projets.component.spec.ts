import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjetsComponent } from "./projets.component";

describe("HomeComponent", () => {
    let component: ProjetsComponent;
    let fixture: ComponentFixture<ProjetsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProjetsComponent]
        });
        fixture = TestBed.createComponent(ProjetsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
