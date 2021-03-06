using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using BusinessHall.Authorization.Users;

namespace BusinessHall.Users.Dto
{
    [AutoMapFrom(typeof(User))]
    public class UserDto : EntityDto<long>
    {
        [Required]
        [StringLength(AbpUserBase.MaxUserNameLength)]
        public string UserName { get; set; }

        [Required]
        [StringLength(AbpUserBase.MaxNameLength)]
        public string Name { get; set; }

        [Required]
        [StringLength(AbpUserBase.MaxSurnameLength)]
        public string Surname { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(AbpUserBase.MaxEmailAddressLength)]
        public string EmailAddress { get; set; }

        public bool IsActive { get; set; }

        public string FullName { get; set; }

        public DateTime? LastLoginTime { get; set; }

        public DateTime CreationTime { get; set; }


        [StringLength(BusinessHallConsts.MaxLength25)]
        public string Telephone { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string WeChat { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string QQ { get; set; }

        public string[] RoleNames { get; set; }
    }
}
