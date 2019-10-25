/********************************************************************************
Author：       Zhen (Evan) Wang , 王振,    Tel：18901599114， QQ：273509239， WeChat：18901599114
Date：         10/18/2019 4:14:48 PM
Description：  Personal Project to spend my free time on weekends and nights.   
*********************************************************************************/

using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.Entities
{
    [Table("Areas")]
    public class Area : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxCodeLength)]
        public string AreaId { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxCodeLength)]
        public string CityId { get; set; }

    }
}
