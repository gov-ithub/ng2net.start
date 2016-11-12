using AutoMapper;
using Ng2Net.Core;
using Ng2Net.Database;
using Ng2Net.WebApi.Base;
using Ng2Net.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Ng2Net.WebApi.Controllers
{
    [RoutePrefix("api/content")]
    public class HtmlContentController : WebController
    {
        [HttpGet]
        [Route("list")]
        public List<HtmlContentModel> List(string filterQuery = "", int page = 0, int pageSize = 0)
        {
            Mapper.Initialize(cfg => { cfg.CreateMap<HtmlContent, HtmlContentModel>(); });
            return Mapper.Map<List<HtmlContentModel>>(HtmlContentQueries.GetHtmlContents(this.DbContext, filterQuery, page * pageSize, pageSize));
        }

        [HttpGet]
        [Route("get")]
        public Dictionary<string, string> 
    }
}