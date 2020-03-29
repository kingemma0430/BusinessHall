/*
 * T4 Template help. It used to create IModelAppService,ModelAppService. It will cantain below functions:
 * GetAll
 * GetById
 * Create
 * Update
 * Delete
 * DeleteForMultiple
 * It will be called in CreateTemplate_Test in BusinessHall.Tests  
 * You can update them in BusinessHall.Tests/TemplateFiles to create your T4
 */
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.T4TemplateHelps
{
    /// <summary>
    /// T4 Template help. It used to create IModelAppService,ModelAppService. It will cantain below functions:
    /// GetAll
    /// GetById
    /// Create
    /// Update
    /// Delete
    /// DeleteForMultiple
    /// It will be called in CreateTemplate_Test in BusinessHall.Tests  
    /// You can update them in BusinessHall.Tests/TemplateFiles to create your T4
    /// </summary>
    public class T4TemplateHelpAppService : IT4TemplateHelpAppService
    {
        public T4TemplateHelpAppService()
        {
        }


        public List<string> GetBusinessHallModelClasses()
        {
            List<string> classlist = ExtendsionHelper.GetBusinessHallModelClasses();
            return classlist;
        }


        public List<string> GetEntitiesClasses()
        {
            List<string> classlist = ExtendsionHelper.GetEntitiesClasses();
            return classlist;
        }

    }
}
