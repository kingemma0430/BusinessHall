﻿/********************************************************************************
** Auth：    Zhen(Evan)Wang 
** Date：    3/15/2018 10:54:45 AM
** Description：    
** Update Log：   
*********************************************************************************/

using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using BusinessHall.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.BasicDatas.Dto
{
    [AutoMapFrom(typeof(Area))]
    public class AreaDto : EntityDto
    {
        public string AreaId { get; set; }

        public string Name { get; set; }

        public string CityId { get; set; }

        public int? TenantId { get; set; }
    }
}
