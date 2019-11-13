import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRouteGuard } from "@shared/auth/auth-route-guard";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { UsersComponent } from "./users/users.component";
import { TenantsComponent } from "./tenants/tenants.component";
import { RolesComponent } from "app/roles/roles.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";

//批充管理
import { SupplierManagerComponent } from "./batchManagement/supplier-manager/supplier-manager.component";
import { ProductManagerComponent } from "./batchManagement/product-manager/product-manager.component";
import { SupplierPayComponent } from "./batchManagement/supplier-pay/supplier-pay.component";
import { AgentManagerComponent } from "./batchManagement/agent-manager/agent-manager.component";
import { CallOrderComponent } from './batchManagement/call-order/call-order.component';
import { RealtimeDataComponent } from "./batchManagement/realtime-data/realtime-data.component";
import { DailyBalanceComponent } from "./batchManagement/daily-balance/daily-balance.component";
import { AlertSettingComponent } from "./batchManagement/alert-setting/alert-setting.component";
import { CreditManagerComponent } from "./batchManagement/credit-manager/credit-manager.component";

import { AgentAccountComponent } from "./batchManagement/agent-account/agent-account.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "home",
            component: HomeComponent,
            canActivate: [AppRouteGuard]
          },
          {
            path: "users",
            component: UsersComponent,
            data: { permission: "Pages.Users" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "roles",
            component: RolesComponent,
            data: { permission: "Pages.Roles" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "tenants",
            component: TenantsComponent,
            data: { permission: "Pages.Tenants" },
            canActivate: [AppRouteGuard]
          },
          { path: "about", component: AboutComponent },
          {
            path: "SupplierManager",
            component: SupplierManagerComponent,
            data: { permission: "Pages.SupplierManager" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "ProductManager",
            component: ProductManagerComponent,
            data: { permission: "Pages.ProductManager" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "SupplierPay",
            component: SupplierPayComponent,
            data: { permission: "Pages.SupplierPay" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "AgentManager",
            component: AgentManagerComponent,
            data: { permission: "Pages.AgentManager" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "AgentAccountManager",
            component: AgentAccountComponent,
            data: { permission: "Pages.AgentManager" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "CallOrder",
            component: CallOrderComponent,
            data: { permission: "Pages.CallOrder" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "RealtimeData",
            component: RealtimeDataComponent,
            data: { permission: "Pages.RealtimeData" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "DailyBalance",
            component: DailyBalanceComponent,
            data: { permission: "Pages.DailyBalance" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "AlertSetting",
            component: AlertSettingComponent,
            data: { permission: "Pages.AlertSetting" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "CreditManager",
            component: CreditManagerComponent,
            data: { permission: "Pages.CreditManager" },
            canActivate: [AppRouteGuard]
          },
          {
            path: "update-password",
            component: ChangePasswordComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
