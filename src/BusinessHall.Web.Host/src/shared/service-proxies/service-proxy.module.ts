import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';

import * as ApiServiceProxies from './service-proxies';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';
import { MenuServiceService } from '../menuServices/menu-service.service';

import { BasicDataService } from '../basicDataServices/basic-data-service.service';
import { SupplierManagerService } from '../supplierServices/supplier-manager.service';

@NgModule({
    providers: [
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        ServiceHelperService,
        MenuServiceService,
        BasicDataService,
        SupplierManagerService,
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
