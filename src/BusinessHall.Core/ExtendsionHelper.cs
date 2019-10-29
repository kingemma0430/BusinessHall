using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace BusinessHall
{
    public static class ExtendsionHelper
    {
        public static List<string> GetBusinessHallModelClasses()
        {
            string nameSpace = "BusinessHall.BusinessHallModels";
            Assembly asm = Assembly.GetExecutingAssembly();
            List<string> namespacelist = new List<string>();
            List<string> classlist = new List<string>();
            foreach (Type type in asm.GetTypes())
            {
                if (type.Namespace.Contains(nameSpace) && type.IsClass)
                    namespacelist.Add(type.Name);
            }
            foreach (string classname in namespacelist)
            {
                if (!classname.Contains("Enum"))
                {
                    classlist.Add(classname);
                }
            }
            return classlist;
        }

        public static List<string> GetEntitiesClasses()
        {
            string nameSpace = "BusinessHall.Entities";
            Assembly asm = Assembly.GetExecutingAssembly();
            List<string> namespacelist = new List<string>();
            List<string> classlist = new List<string>();
            foreach (Type type in asm.GetTypes())
            {
                if (type.Namespace.Contains(nameSpace) && type.IsClass)
                    namespacelist.Add(type.Name);
            }
            foreach (string classname in namespacelist)
            {
                if (!classname.Contains("Enum"))
                {
                    classlist.Add(classname);
                }
            }
            return classlist;
        }
    }
}
