using System.ComponentModel.DataAnnotations;

namespace BusinessHall.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}