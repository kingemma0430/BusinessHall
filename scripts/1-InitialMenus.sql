
delete from AbpUserRoleMenus;
delete from abpmenus;


INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('HomePage','HomePage','/app/home','home',1,1,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('BatchManagement','BatchManagement','','menu',1,2,null,null);

select Id from abpmenus where Name="BatchManagement" limit 0,1 into @BatchManagementMenuId;
			
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierManager','SupplierManager','/app/SupplierManager','card_travel',1,1,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('ProductManager','ProductManager','/app/ProductManager','category',1,2,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierPay','SupplierPay','/app/SupplierPay','business',1,3,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AgentManager','AgentManager','/app/AgentManager','ballot',1,4,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CallOrder','CallOrder','/app/CallOrder','view_comfy',1,5,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CreditManager','CreditManager','/app/CreditManager','assessment',1,6,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AlertSetting','AlertSetting','/app/AlertSetting','alarm_add',1,7,null, @BatchManagementMenuId);

INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('UserManager','UserManager','','group',1,3,null, null);
select Id from abpmenus where Name="UserManager" limit 0,1 into @UserManagerMenuId;
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Users','Users','/app/users','people',1,1,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Roles','Roles','/app/roles','local_offer',1,2,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Tenants','Tenants','/app/tenants','business',1,49,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('About','About','/app/about','info',1,50,null,null);   

insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,1 from abpmenus  ; 
insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,2 from abpmenus  ; 
