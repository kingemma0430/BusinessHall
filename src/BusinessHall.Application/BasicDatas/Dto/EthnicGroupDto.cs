/********************************************************************************
** Auth：    Zhen(Evan)Wang 
** Date：    3/15/2018 4:08:18 PM
** Description： 种族   
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
    /// <summary>
    /// 种族
    /// </summary>
    [AutoMapFrom(typeof(EthnicGroup))]
    public class EthnicGroupDto : EntityDto
    {
        public string Name { get; set; }

        public int? TenantId { get; set; }

    }
}
