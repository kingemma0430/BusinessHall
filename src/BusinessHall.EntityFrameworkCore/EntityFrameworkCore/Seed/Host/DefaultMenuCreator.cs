using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BusinessHall.BusinessHallModels;


namespace BusinessHall.EntityFrameworkCore.Seed.Host
{
    public class DefaultMenuCreator
    {
        private readonly BusinessHallDbContext _context;

        public DefaultMenuCreator(BusinessHallDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateMenus();
        }

        private void CreateMenus()
        {
            // Admin menu for host
            var adminRoleForHost = _context.AbpMenus.FirstOrDefault();
            if (adminRoleForHost == null)
            {
                AbpMenu abpMenu = new AbpMenu();
                abpMenu.Id = 0;
                abpMenu.Name = "Dashboard";
                abpMenu.DisplayName = "Dashboard";
                abpMenu.Icon = "";
                abpMenu.IsActive = true;
                abpMenu.MenuUrlRoute = "/app/home";
                _context.AbpMenus.Add(abpMenu);

                AbpMenu abpMenu2 = new AbpMenu();
                abpMenu2.Id = 0;
                abpMenu2.Name = "pcgl";
                abpMenu2.DisplayName = "批充管理";//批充管理
                abpMenu2.Icon = "";
                abpMenu2.IsActive = true;
                abpMenu2.MenuUrlRoute = "/app/pcgl";
                var pcgl = _context.AbpMenus.Add(abpMenu2).Entity;

                AbpMenu abpMenu3 = new AbpMenu();
                abpMenu3.Id = 0;
                abpMenu3.Name = "AgentSupplier";
                abpMenu3.DisplayName = "AgentSupplier";//供货商管理
                abpMenu3.Icon = "";
                abpMenu3.IsActive = true;
                abpMenu3.MenuUrlRoute = "/app/AgentSupplier";
                abpMenu3.ParentMenuId = pcgl.Id;
                _context.AbpMenus.Add(abpMenu3);

                AbpMenu abpMenu4 = new AbpMenu();
                abpMenu4.Id = 0;
                abpMenu4.Name = "Product";
                abpMenu4.DisplayName = "Product";//供应商产品
                abpMenu4.Icon = "";
                abpMenu4.IsActive = true;
                abpMenu4.MenuUrlRoute = "/app/Product";
                abpMenu4.ParentMenuId = pcgl.Id;
                _context.AbpMenus.Add(abpMenu3);

                //adminRoleForHost = _context.Roles.Add().Entity;
                _context.SaveChanges();
            }
        }
    }
}
