INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Home','Home','Home','home',1,1,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('BatchManagement','BatchManagement','','menu',1,2,null,null);

select Id from abpmenus where Name="BatchManagement" limit 0,1 into @BatchManagementMenuId;
			
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierManager','SupplierManager','SupplierManager','group',1,1,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('ProductManager','ProductManager','ProductManager','group',1,2,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('SupplierPay','SupplierPay','SupplierPay','group',1,3,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AgentManager','AgentManager','AgentManager','group',1,4,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CallOrder','CallOrder','CallOrder','group',1,5,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('CreditManager','CreditManager','CreditManager','group',1,6,null, @BatchManagementMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('AlertSetting','AlertSetting','AlertSetting','group',1,7,null, @BatchManagementMenuId);

INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('UserManager','UserManager','','group',1,3,null, null);
select Id from abpmenus where Name="UserManager" limit 0,1 into @UserManagerMenuId;
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Users','Users','Users','person',1,1,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Roles','Roles','Roles','role',1,2,null, @UserManagerMenuId);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('Tenants','Tenants','Tenants','role',1,2,null,null);
INSERT INTO abpmenus(`Name`,`DisplayName`,`MenuUrlRoute`,`Icon`,`IsActive`,`MenuOrder`,`TenantId`,`ParentMenuId`) 
			VALUES ('About','About','About','info',1,50,null,null);   

delete from AbpUserRoleMenus;
insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,1 from abpmenus  ; 
insert into AbpUserRoleMenus(TenantId,MenuId,RoleId)  select TenantId,Id,2 from abpmenus  ; 
