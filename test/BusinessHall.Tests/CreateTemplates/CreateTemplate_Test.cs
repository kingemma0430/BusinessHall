using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Xunit;
using Abp.Application.Services.Dto;
using BusinessHall.BusinessHallModels;
using System;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Reflection;
using System.Linq;
using BusinessHall.T4TemplateHelps;

namespace BusinessHall.Tests.CreateTemplates
{
    public class CreateTemplate_Test : BusinessHallTestBase
    {
        private readonly T4TemplateHelpAppService _t4TemplateHelpAppService;

        public CreateTemplate_Test()
        {
            _t4TemplateHelpAppService = Resolve<T4TemplateHelpAppService>();
        }

        [Fact]
        public async Task CreateTemplateAsync()
        {
            try
            {
                List<string> modelNames = _t4TemplateHelpAppService.GetBusinessHallModelClasses();
                bool isNeedToDeleteOldFile = false;//If you want to override all service, you can set it true
                string currentFolder = AppDomain.CurrentDomain.BaseDirectory;
                if (!Directory.Exists(currentFolder))
                {
                    Directory.CreateDirectory(currentFolder);
                }
                string outputFolder = System.IO.Path.Combine(currentFolder, "OutputTemplates");
                if (!Directory.Exists(outputFolder))
                {
                    Directory.CreateDirectory(outputFolder);
                }
                else
                {
                    if (isNeedToDeleteOldFile)
                    {
                        Directory.Delete(outputFolder, true);
                    }
                }
                string file1 = System.IO.Path.Combine(currentFolder, "TemplateFiles\\ITemplateAPIs.txt");
                string file2 = System.IO.Path.Combine(currentFolder, "TemplateFiles\\TemplateAPIs.txt");
                string textITemplateAPI = await ReadTextFromTxt(file1);
                string textTemplateAPI = await ReadTextFromTxt(file2);
                string parameterModel = "@Model";
                string parameterModelClass = "@ModelClass";
                foreach (var itemClassName in modelNames)
                {
                    string subFolder = Path.Combine(outputFolder, itemClassName + "s");
                    if (!Directory.Exists(subFolder))
                    {
                        Directory.CreateDirectory(subFolder);
                    }
                    string outputFileName = Path.Combine(subFolder, itemClassName + "AppService.cs");
                    string outputFileNameInterface = Path.Combine(subFolder, "I" + itemClassName + "AppService.cs");

                    string modelClass = itemClassName.Substring(0, 1).ToLower() + itemClassName.Substring(1);
                    string tmptextITemplateAPI = textITemplateAPI.Replace(parameterModelClass, modelClass).Replace(parameterModel, itemClassName);
                    string tmptextTemplateAPI = textTemplateAPI.Replace(parameterModelClass, modelClass).Replace(parameterModel, itemClassName);
                    if (!File.Exists(outputFileName))
                    {
                        using (StreamWriter writer = File.CreateText(outputFileNameInterface))
                        {
                            await writer.WriteLineAsync(tmptextITemplateAPI);
                        }
                        using (StreamWriter writer = File.CreateText(outputFileName))
                        {
                            await writer.WriteLineAsync(tmptextTemplateAPI);
                        }
                    }
                }
                System.Diagnostics.Process.Start("explorer.exe", outputFolder);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        private static async Task<string> ReadTextFromTxt(string filename)
        {
            char[] result;
            StringBuilder builder = new StringBuilder();
            using (StreamReader reader = File.OpenText(filename))
            {
                result = new char[reader.BaseStream.Length];
                await reader.ReadAsync(result, 0, (int)reader.BaseStream.Length);
            }

            foreach (char c in result)
            {
                builder.Append(c);
            }
            string newText = builder.ToString();
            return newText;
        }
    }
}
