/********************************************************************************
** Auth：    Zhen(Evan)Wang 
** Date：    3/15/2018 10:54:30 AM
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
    [AutoMapFrom(typeof(Province))]
    public class ProvinceDto : EntityDto
    {
        public string ProvinceId { get; set; }

        public string Name { get; set; }

        public int? TenantId { get; set; }
    }
}
