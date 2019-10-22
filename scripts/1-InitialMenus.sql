
delete from AbpUserRoleMenus;
delete from abpmenus;


INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('HomePage','HomePage','Home','home',1,1,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('BatchManagement','BatchManagement','','menu',1,2,null,null);

select Id from abpmenus where Name="BatchManagement" limit 0,1 into @BatchManagementMenuId;
			
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierManager','SupplierManager','/app/SupplierManager','group',1,1,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('ProductManager','ProductManager','/app/ProductManager','group',1,2,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierPay','SupplierPay','/app/SupplierPay','group',1,3,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AgentManager','AgentManager','/app/AgentManager','group',1,4,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CallOrder','CallOrder','/app/CallOrder','group',1,5,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CreditManager','CreditManager','/app/CreditManager','group',1,6,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AlertSetting','AlertSetting','/app/AlertSetting','group',1,7,null, @BatchManagementMenuId);

INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('UserManager','UserManager','','group',1,3,null, null);
select Id from abpmenus where Name="UserManager" limit 0,1 into @UserManagerMenuId;
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Users','Users','/app/Users','person',1,1,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Roles','Roles','/app/Roles','role',1,2,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Tenants','Tenants','/app/Tenants','role',1,2,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('About','About','/app/About','info',1,50,null,null);   

insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,1 from abpmenus  ; 
insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,2 from abpmenus  ; 
