using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace BusinessHall.Localization
{
    public static class BusinessHallLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(BusinessHallConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(BusinessHallLocalizationConfigurer).GetAssembly(),
                        "BusinessHall.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
