using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.IdentityFramework;
using Abp.Linq.Extensions;
using Abp.Localization;
using Abp.Runtime.Session;
using Abp.UI;
using BusinessHall.Authorization;
using BusinessHall.Authorization.Accounts;
using BusinessHall.Authorization.Roles;
using BusinessHall.Authorization.Users;
using BusinessHall.Roles.Dto;
using BusinessHall.Users.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BusinessHall.T4TemplateHelps
{
    public interface IT4TemplateHelpAppService : IApplicationService
    {

        List<string> GetBusinessHallModelClasses();

        List<string> GetEntitiesClasses();
    }
}
