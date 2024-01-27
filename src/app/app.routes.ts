import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
	},
    {
        path: "",
        loadChildren: () => import("./articles/articles.routes")
    },
    {
        path: "contacts",
        loadComponent: () => import("./contacts/contacts.component").then(module => module.ContactsComponent)
    },
    {
        path: "projets",
        loadComponent: () => import("./projets/projets.component").then(module => module.ProjetsComponent)
    }
]
