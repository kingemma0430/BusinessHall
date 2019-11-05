#****************************************Tools************************************************************#
	1. VS2019 community 16.2.4
	2. Node.js v10.16.3 (npm v6.9.0)
	3. Net Core 2.2  (
		1. vs2017: https://dotnet.microsoft.com/download/dotnet-core/2.2#sdk-2.2.109  
		2. vs2019: https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.402-windows-x64-installer
	4. MySql 8.0.18 (https://dev.mysql.com/downloads/file/?id=490395)
	5. Visual Studio Code


	

#********************Initial************************************************************#
BackEnd
	1. Double click BusinessHall\BusinessHall.sln to open project, and then Build it.
	2. Tools==>NuGet Package Manager==>Package Manager Console, choose "BusinessHall.EntityFrameworkCore" as default project.
	3. input "update-database", enter
	4. Open MySql and execute  scripts folder files
	5. Select "BusinessHall.EntityFrameworkCore" as startup project, start it.
	
FrontEnd		
	1. Open Visual Studio Code.
	2. Open project folder "BusinessHall\src\BusinessHall.Web.Host",   CTRL+~    to open console, execute below two scripts
		npm install -g @angular/cli
		npm install

	3. If your nodejs version is newer than before, you need to execute below script to upgrade the sass
		npm rebuild node-sass

	4. Start Project
		npm start

	5. Publish Project
		npm run build:prod

#********************To support IE or not************************************************************#	
	The original source that download from aspnetboilerplate ,it didn't support IE browser. For My branch, it has been changed to support it.
	But it will be increased the js size when publish . If your customs that not need to support IE, you can change them back.
	
	1. Need to support IE, change them like below
		1.1 Remove "not" from  "not IE 9-11" in BusinessHall.Web.Host\browserslist file
		1.2 change "target" value from "es2015" to “es5” in BusinessHall.Web.Host\src\tsconfig.json file 
		
	2. Do NOT need to support IE, change them back like below
		2.1 Append "not" in the left of "IE 9-11" in BusinessHall.Web.Host\browserslist file
		2.2 change "target" value from "es5" to “es2015” in BusinessHall.Web.Host\src\tsconfig.json file 
	
#********************Default user and tenant************************************************************#
	1. User name: admin  password: 123qwe
	2. Tenant name: Default

#********************Add another Permission************************************************************#

	1. Add constant field in BusinessHall.Core\Authorization\PermissionNames.cs

	2. Add code like below in BusinessHall.Core\Authorization\BusinessHallAuthorizationProvider.cs
		context.CreatePermission(PermissionNames.Pages_Menus, L("Menus"));
	3. Build project, it will be inserted into tables to assign this permission to admin role
	

#********************Add another fields in User (AbpUsers) table ************************************************************#
Make sure all models in BusinessHallModels folder for code rules.
	1. add fields like below code in BusinessHall.Core\Authorization\Users\User.cs
		
		[StringLength(BusinessHallConsts.MaxLength25)]
        public string Telephone { get; set; }
	2. Open Vs2019, Tools==>NuGet Package Manager==>Package Manager Consolle, choose "BusinessHall.EntityFrameworkCore" as default project
	3. Input Add-Migration "AddFieldsInUsers",  "AddFieldsInUsers" value you can according your style to rename it, and click "Enter" keyboard
	4. Input "update-database", enter

	
#========================================Important=======ApplicationService naming Rules=================
Interface：I**AppService
Class：    **AppService
When create service in Applications, the name is AbcAppService and IAbcAppService, once created, please don't rename it, otherwise, the service will not work any more.

#========================================Important========================


#********************Components of Primeng************************************************************#
https://www.primefaces.org/primeng/#/


icons of primeng
https://www.primefaces.org/primereact/#/icons/
	
	
#******************** Material icons************************************************************# 
#********************you can check _screenshots\Material icons.png to find all materila icons
menu
menu_open
more_horiz
more_vert
person
folder
access_alarm
save
save_all
queue
equalizer-柱状图
work
view_list
assignment
person_add
group
location_city
notifications
refresh
arrow_back
arrow_forward
close





#******************** aspnetboilerplate************************************************************# 

# Important

Issues of this repository are tracked on https://github.com/aspnetboilerplate/aspnetboilerplate. Please create your issues on https://github.com/aspnetboilerplate/aspnetboilerplate/issues.

# Introduction

This is a template to create **ASP.NET Core MVC / Angular** based startup projects for [ASP.NET Boilerplate](https://aspnetboilerplate.com/Pages/Documents). It has 2 different versions:

1. [ASP.NET Core MVC & jQuery](https://aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Core) (server rendered multi-page application).
2. [ASP.NET Core & Angular](https://aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Angular) (single page application).
 
User Interface is based on [BSB Admin theme](https://github.com/gurayyarar/AdminBSBMaterialDesign).
 
# Download

Create & download your project from https://aspnetboilerplate.com/Templates

# Screenshots

#### Sample Dashboard Page
![](_screenshots/module-zero-core-template-ui-home.png)

#### User Creation Modal
![](_screenshots/module-zero-core-template-ui-user-create-modal.png)

#### Login Page

![](_screenshots/module-zero-core-template-ui-login.png)

# Documentation

* [ASP.NET Core MVC & jQuery version.](https://aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Core)
* [ASP.NET Core & Angular  version.](https://aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Angular)

# License

[MIT](LICENSE).

#Author

Zhen (Evan) Wang , 王振    
Tel:     18901599114 
QQ：     273509239
WeChat： 18901599114
Email:   18901599114@163.com
Location: Nanjing 南京
#========================================
