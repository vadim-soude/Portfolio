import { Routes } from "@angular/router";

export default [
    {
        path: "page",
        providers: [],
        children: [
            {
                path: "about",
                loadComponent: () => import("./components/about/about.component").then(module => module.AboutComponent)
            },
            {
                path: "account",
                loadComponent: () => import("./components/account/account.component").then(module => module.AccountComponent)
            }
        ]
    }
] as Routes;
