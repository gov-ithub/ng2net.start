using Ng2Net.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ng2Net.Core
{
    public class HtmlContentQueries
    {
        public static List<HtmlContent> GetHtmlContents(DatabaseContext context, string filterQuery = null, int start=0, int count=0)
        {
            var result = context.HtmlContents.Where(c => filterQuery == null || c.Name.StartsWith(filterQuery)).OrderBy(c=>c.Name);
            if (count > 0)
                result = result.Skip(start - 1).Take(count).OrderBy(x => true);
            return result.ToList();
        }
    }
}
