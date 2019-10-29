using Abp.Domain.Entities;
using BusinessHall.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("ProductOperators")]
    public class ProductOperator:Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        public int ProductId { get; set; }

        public int OperatorId { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }

        public User User { get; set; }

        public virtual Product Product { get; set; }

        public virtual Operator Operator { get; set; }
    }
}
