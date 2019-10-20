using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("ProductOperators")]
    public class ProductOperator:Entity, IMustHaveTenant
    {
        public int TenantId { get; set; }

        public int ProductId { get; set; }

        public int OperatorId { get; set; }

        public virtual Product Product { get; set; }

        public virtual Operator Operator { get; set; }
    }
}
