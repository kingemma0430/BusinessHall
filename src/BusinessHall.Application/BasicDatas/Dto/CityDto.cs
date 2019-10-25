/********************************************************************************
** Auth：    Zhen(Evan)Wang 
** Date：    3/15/2018 10:54:37 AM
** Description：    
** Update Log：   
*********************************************************************************/

using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.BasicDatas.Dto
{
    public class CityDto : EntityDto
    {
        public string CityId { get; set; }

        public string Name { get; set; }

        public string ProvinceId { get; set; }

        public int? TenantId { get; set; }
    }
}
