import { Routes } from "@angular/router";

export default [
    {
        path: "articles",
        providers: [],
        children: [
            {
                path: "home",
                loadComponent: () => import("./components/home/home.component").then(module => module.HomeComponent)
            },
            {
                path: "account",
                loadComponent: () => import("./components/account/account.component").then(module => module.AccountComponent)
            }
        ]
    }
] as Routes;
