using System;

namespace WalkingTec.Mvvm.Mvc
{
    public static class FResultExtension
    {
        /// <summary>
        /// 创建一个关闭指定窗口的Result
        /// </summary>
        /// <param name="self">ContentResult</param>
        /// <returns>返回当前对象</returns>
        public static FResult CloseDialog(this FResult self)
        {
            self.ContentBuilder.Append("ff.CloseDialog();");
            return self;
        }

        public static FResult Alert(this FResult self, string msg, string title = null)
        {
            self.ContentBuilder.Append($"ff.Alert('{msg}','{title??MvcProgram._localizer?["Sys.Info"]}');");
            return self;
        }

        public static FResult Message(this FResult self, string msg, string title = null)
        {
            self.ContentBuilder.Append($"ff.Msg('{msg}','{title}');");
            return self;
        }


        public static FResult RefreshGrid(this FResult self, string winId = "", int index = 0)
        {
            if (string.IsNullOrEmpty(winId))
            {
                winId = self.Controller.ParentWindowId;
                if (string.IsNullOrEmpty(winId))
                {
                    winId = "LAY_app_body";
                }
            }
            self.ContentBuilder.Append($"ff.RefreshGrid('{winId}',{index});");
            return self;
        }

        /// <summary>
        /// Layui暂时不支持单行刷新，所以现在是 RefreshGrid
        /// </summary>
        /// <param name="self"></param>
        /// <param name="id"></param>
        /// <param name="winId"></param>
        /// <returns></returns>
        public static FResult RefreshGridRow(this FResult self, Guid id, string winId = "")
        {
            self.RefreshGrid(winId);
            return self;
        }

        public static FResult RefreshGridRow(this FResult self, string id, string winId = "")
        {
            self.RefreshGrid(winId);
            return self;
        }

        public static FResult RefreshGridRow(this FResult self, long id, string winId = "")
        {
            self.RefreshGrid(winId);
            return self;
        }
        /// <summary>
        /// 刷新当前页面
        /// </summary>
        /// <param name="self"></param>
        /// <returns></returns>
        public static FResult RefreshPage(this FResult self)
        {
            self.ContentBuilder.Append($"layui.index.render();");
            return self;
        }

        /// <summary>
        /// 跳转浏览器页面
        /// </summary>
        /// <param name="self"></param>
        /// <param name="url">url</param>
        /// <returns></returns>
        public static FResult RedirectUrl(this FResult self, string url)
        {
            self.ContentBuilder.Append($"window.location.url='{url}'");
            return self;
        }


        public static FResult AddCustomScript(this FResult self, string script)
        {
            self.ContentBuilder.Append(script);
            return self;
        }
    }
}
