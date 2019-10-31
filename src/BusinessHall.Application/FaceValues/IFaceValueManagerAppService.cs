using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.FaceValues.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.FaceValueManagers
{
    public interface IFaceValueManagerAppService : IApplicationService
    {
        Task<ListResultDto<FaceValueDto>> GetAll();

        Task<FaceValueDto> Create(FaceValueDto faceValueDto);

        Task<FaceValueDto> GetById(int id);

        Task<FaceValueDto> Update(FaceValueDto faceValueDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}

