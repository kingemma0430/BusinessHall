using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;
using BusinessHall.FaceValues.Dto;

namespace BusinessHall.FaceValueManagers
{
    [AbpAuthorize(PermissionNames.Pages_ProductManager)]
    public class FaceValueManagerAppService : BusinessHallAppServiceBase, IFaceValueManagerAppService
    {
        private readonly IRepository<FaceValue> _faceValueRepository;

        public FaceValueManagerAppService(IRepository<FaceValue> faceValueRepository)
        {
            _faceValueRepository = faceValueRepository;
        }

        public async Task<ListResultDto<FaceValueDto>> GetAll()
        {
            var result = await _faceValueRepository.GetAllListAsync();
            return new ListResultDto<FaceValueDto>(ObjectMapper.Map<List<FaceValueDto>>(result));
        }

        public async Task<FaceValueDto> GetById(int id)
        {
            FaceValue result = await _faceValueRepository.GetAsync(id);
            FaceValueDto dto = ObjectMapper.Map<FaceValueDto>(result);
            return dto;
        }

        public Task<FaceValueDto> Create(FaceValueDto faceValueDto)
        {
            faceValueDto.CreatorUserId = AbpSession.UserId.Value;
            faceValueDto.CreationTime = DateTime.Now;
            FaceValue faceValue = ObjectMapper.Map<FaceValue>(faceValueDto);
            faceValueDto.Id = _faceValueRepository.InsertAndGetId(faceValue);
            return Task.FromResult<FaceValueDto>(faceValueDto);
        }

        public Task<FaceValueDto> Update(FaceValueDto faceValueDto)
        {
            FaceValue faceValue = ObjectMapper.Map<FaceValue>(faceValueDto);
            faceValue = _faceValueRepository.Update(faceValue);
            return Task.FromResult<FaceValueDto>(faceValueDto);
        }

        public async Task Delete(int id)
        {
            await _faceValueRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(string ids)
        {
            List<int> idList = ExtendsionHelper.GetIds(ids);
            await _faceValueRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
