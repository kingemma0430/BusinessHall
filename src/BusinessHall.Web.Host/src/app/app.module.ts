import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';


import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ListboxModule } from 'primeng/listbox';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpinnerModule } from 'primeng/spinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
//批充管理
import { SupplierManagerComponent } from './batchManagement/supplier-manager/supplier-manager.component';
import { ProductManagerComponent } from './batchManagement/product-manager/product-manager.component';
import { SupplierPayComponent } from './batchManagement/supplier-pay/supplier-pay.component';
import { AgentManagerComponent } from './batchManagement/agent-manager/agent-manager.component';
import { RealtimeDataComponent } from './batchManagement/realtime-data/realtime-data.component';
import { DailyBalanceComponent } from './batchManagement/daily-balance/daily-balance.component';
import { AlertSettingComponent } from './batchManagement/alert-setting/alert-setting.component';
import { CreditManagerComponent } from './batchManagement/credit-manager/credit-manager.component';
import { CallOrderComponent } from './batchManagement/call-order/call-order.component';
import { CreateSupplierComponent } from './batchManagement/supplier-manager/create-supplier/create-supplier.component';
import { CreateProductComponent } from './batchManagement/product-manager/create-product/create-product.component';
import { CreateAgentComponent } from './batchManagement/agent-manager/create-agent/create-agent.component';
import { CreateSupplierPayComponent } from './batchManagement/supplier-pay/create-supplier-pay/create-supplier-pay.component';
import { AgentAccountComponent } from './batchManagement/agent-account/agent-account.component';
import { CreateAgentAccountComponent } from './batchManagement/agent-account/create-agent-account/create-agent-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopBarComponent,
    TopBarLanguageSwitchComponent,
    SideBarUserAreaComponent,
    SideBarNavComponent,
    SideBarFooterComponent,
    RightSideBarComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    SupplierManagerComponent,
    ProductManagerComponent,
    SupplierPayComponent,
    AgentManagerComponent,
    RealtimeDataComponent,
    DailyBalanceComponent,
    AlertSettingComponent,
    CreditManagerComponent,
    CallOrderComponent,
    CreateSupplierComponent,
    CreateProductComponent,
    CreateAgentComponent,
    CreateSupplierPayComponent,
    AgentAccountComponent,
    CreateAgentAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DataViewModule, TableModule, InputTextModule, CalendarModule, AutoCompleteModule,
    CheckboxModule, DropdownModule, InputTextareaModule, InputSwitchModule, ListboxModule,
    InputMaskModule, MultiSelectModule, PasswordModule, RadioButtonModule,
    SpinnerModule, SelectButtonModule, ToggleButtonModule, ButtonModule,
    SplitButtonModule, FullCalendarModule, OrganizationChartModule, VirtualScrollerModule,
    TreeModule, AccordionModule, CardModule, PanelModule, TabViewModule, ConfirmDialogModule, DialogModule,
    DynamicDialogModule, TooltipModule, FileUploadModule, ChartModule, MessagesModule, MessageModule,
    ToastModule, BlockUIModule, ProgressSpinnerModule, PanelMenuModule,
    MenuModule, PanelMenuModule,
    ModalModule.forRoot(),
    AbpModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
    CreateSupplierComponent,
    CreateProductComponent,
    CreateAgentComponent,
    CreateSupplierPayComponent,
    CreateAgentAccountComponent
  ]
})
export class AppModule { }
