using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.SupplierPays.Dto
{
    public class SupplierPaySearchCondition
    {
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        /// <summary>
        /// use to avoid UTC time issue
        /// </summary>
        public string StartDateString { get; set; }

        /// <summary>
        /// use to avoid UTC time issue
        /// </summary>
        public string EndDateString { get; set; }

        public List<int> SelectedSupplierIds { get; set; }

    }
}
