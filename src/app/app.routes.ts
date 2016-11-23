import { Routes } from "@angular/router";

export const APPRROUTES: Routes = [
    //{ path: '', redirectTo: '/remote', pathMatch: 'full'  },
    { path: "", loadChildren: "app/dashboard/dashboard.module#DashboardModule" },
    { path: "**", loadChildren: "app/dashboard/dashboard.module#DashboardModule" }
];