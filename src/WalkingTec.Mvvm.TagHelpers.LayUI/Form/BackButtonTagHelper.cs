using Microsoft.AspNetCore.Razor.TagHelpers;

namespace WalkingTec.Mvvm.TagHelpers.LayUI
{
    [HtmlTargetElement("wt:backbutton", TagStructure = TagStructure.WithoutEndTag)]
    public class BackButtonTagHelper : BaseButtonTag
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (string.IsNullOrEmpty(Text))
            {
                Text = THProgram._localizer["Sys.Back"];
            }
            Click = "ff.Back()";



            base.Process(context, output);
        }
    }
}
