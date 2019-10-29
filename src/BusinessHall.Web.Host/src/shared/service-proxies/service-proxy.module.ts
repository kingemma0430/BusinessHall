import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';

import * as ApiServiceProxies from './service-proxies';

import { MissionService, LoaderService } from '../serviceHelpers/MissionService';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';
import { MenuServiceService } from '../menuServices/menu-service.service';

import { BasicDataService } from '../basicDataServices/basic-data-service.service';
import { SupplierManagerService } from '../supplierServices/supplier-manager.service';
import { ProductService } from '../productServices/product.service';
import { OperatorService } from '../operatorServices/operator.service';



@NgModule({
    providers: [
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        MissionService, LoaderService,
        ServiceHelperService,
        MenuServiceService,
        BasicDataService,
        SupplierManagerService,
        ProductService,
        OperatorService,
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
