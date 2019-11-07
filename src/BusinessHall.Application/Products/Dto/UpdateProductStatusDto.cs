using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.Products.Dto
{
    public class UpdateProductStatusDto
    {
        public List<int> ProductIdList { get; set; }

        public ProductStatusEnum ProductStatus { get; set; }
    }
}
