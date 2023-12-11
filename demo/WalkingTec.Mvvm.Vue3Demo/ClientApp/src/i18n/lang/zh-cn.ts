// 定义内容
export default {
    _system: {
        router: {
            home: '首页',
            system: '系统设置',
            systemMenu: '菜单管理',
            systemRole: '角色管理',
            systemUser: '用户管理',
            systemDept: '部门管理',
            systemDic: '字典管理',
            limits: '权限管理',
            limitsFrontEnd: '前端控制',
            limitsFrontEndPage: '页面权限',
            limitsFrontEndBtn: '按钮权限',
            limitsBackEnd: '后端控制',
            limitsBackEndEndPage: '页面权限',
            menu: '菜单嵌套',
            menu1: '菜单1',
            menu11: '菜单11',
            menu12: '菜单12',
            menu121: '菜单121',
            menu122: '菜单122',
            menu13: '菜单13',
            menu2: '菜单2',
            funIndex: '功能',
            funTagsView: 'tagsView 操作',
            funCountup: '数字滚动',
            funWangEditor: 'Editor 编辑器',
            funCropper: '图片裁剪',
            funQrcode: '二维码生成',
            funEchartsMap: '地理坐标/地图',
            funPrintJs: '页面打印',
            funClipboard: '复制剪切',
            funGridLayout: '拖拽布局',
            funSplitpanes: '窗格拆分器',
            funDragVerify: '验证器',
            pagesIndex: '页面',
            pagesFiltering: '过滤筛选组件',
            pagesFilteringDetails: '过滤筛选组件详情',
            pagesFilteringDetails1: '过滤筛选组件详情111',
            pagesIocnfont: 'ali 字体图标',
            pagesElement: 'ele 字体图标',
            pagesAwesome: 'awe 字体图标',
            pagesFormAdapt: '表单自适应',
            pagesTableRules: '表单表格验证',
            pagesFormI18n: '表单国际化',
            pagesFormRules: '多表单验证',
            pagesDynamicForm: '动态复杂表单',
            pagesWorkflow: '工作流',
            pagesListAdapt: '列表自适应',
            pagesWaterfall: '瀑布屏',
            pagesSteps: '步骤条',
            pagesPreview: '大图预览',
            pagesWaves: '波浪效果',
            pagesTree: '树形改表格',
            pagesDrag: '拖动指令',
            pagesLazyImg: '图片懒加载',
            makeIndex: '组件封装',
            makeSelector: '图标选择器',
            makeNoticeBar: '滚动通知栏',
            makeSvgDemo: 'svgIcon 演示',
            makeTableDemo: '表格封装演示',
            paramsIndex: '路由参数',
            paramsCommon: '普通路由',
            paramsDynamic: '动态路由',
            paramsCommonDetails: '普通路由详情',
            paramsDynamicDetails: '动态路由详情',
            chartIndex: '大数据图表',
            visualizingIndex: '数据可视化',
            visualizingLinkDemo1: '数据可视化演示1',
            visualizingLinkDemo2: '数据可视化演示2',
            personal: '个人中心',
            tools: '工具类集合',
            layoutLinkView: '外链',
            layoutIframeViewOne: '内嵌 iframe1',
            layoutIframeViewTwo: '内嵌 iframe2',
        },
        staticRoutes: {
            signIn: '登录',
            notFound: '找不到此页面',
            noPower: '没有权限',
        },
        user: {
            title0: '组件大小',
            title1: '语言切换',
            title2: '菜单搜索',
            title3: '布局配置',
            title4: '消息',
            title5: '开全屏',
            title6: '关全屏',
            dropdownLarge: '大型',
            dropdownDefault: '默认',
            dropdownSmall: '小型',
            dropdown1: '首页',
            dropdown2: '修改密码',
            dropdown3: '代码生成器',
            dropdown4: 'Api文档',
            dropdown5: '退出登录',
            searchPlaceholder: '菜单搜索：支持中文、路由路径',
            newTitle: '通知',
            newBtn: '全部已读',
            newGo: '前往通知中心',
            newDesc: '暂无通知',
            logOutTitle: '提示',
            logOutMessage: '此操作将退出登录, 是否继续?',
            logOutConfirm: '确定',
            logOutCancel: '取消',
            logOutExit: '退出中',
        },
        tagsView: {
            refresh: '刷新',
            close: '关闭',
            closeOther: '关闭其它',
            closeAll: '全部关闭',
            fullscreen: '当前页全屏',
            closeFullscreen: '关闭全屏',
        },
        notFound: {
            foundTitle: '地址输入错误，请重新输入地址~',
            foundMsg: '您可以先检查网址，然后重新输入或给我们反馈问题。',
            foundBtn: '返回首页',
        },
        noAccess: {
            accessTitle: '您未被授权，没有操作权限~',
            accessMsg: '联系方式：加QQ群探讨 665452019',
            accessBtn: '重新授权',
        },
        layout: {
            configTitle: '布局配置',
            oneTitle: '全局主题',
            twoTopTitle: '顶栏设置',
            twoMenuTitle: '菜单设置',
            twoColumnsTitle: '分栏设置',
            twoTopBar: '顶栏背景',
            twoTopBarColor: '顶栏默认字体颜色',
            twoIsTopBarColorGradual: '顶栏背景渐变',
            twoMenuBar: '菜单背景',
            twoMenuBarColor: '菜单默认字体颜色',
            twoMenuBarActiveColor: '菜单高亮背景色',
            twoIsMenuBarColorGradual: '菜单背景渐变',
            twoColumnsMenuBar: '分栏菜单背景',
            twoColumnsMenuBarColor: '分栏菜单默认字体颜色',
            twoIsColumnsMenuBarColorGradual: '分栏菜单背景渐变',
            twoIsColumnsMenuHoverPreload: '分栏菜单鼠标悬停预加载',
            threeTitle: '界面设置',
            threeIsCollapse: '菜单水平折叠',
            threeIsUniqueOpened: '菜单手风琴',
            threeIsFixedHeader: '固定 Header',
            threeIsClassicSplitMenu: '经典布局分割菜单',
            threeIsLockScreen: '开启锁屏',
            threeLockScreenTime: '自动锁屏(s/秒)',
            fourTitle: '界面显示',
            fourIsShowLogo: '侧边栏 Logo',
            fourIsBreadcrumb: '开启 Breadcrumb',
            fourIsBreadcrumbIcon: '开启 Breadcrumb 图标',
            fourIsTagsview: '开启 Tagsview',
            fourIsTagsviewIcon: '开启 Tagsview 图标',
            fourIsCacheTagsView: '开启 TagsView 缓存',
            fourIsSortableTagsView: '开启 TagsView 拖拽',
            fourIsShareTagsView: '开启 TagsView 共用',
            fourIsFooter: '开启 Footer',
            fourIsGrayscale: '灰色模式',
            fourIsInvert: '色弱模式',
            fourIsDark: '深色模式',
            fourIsWartermark: '开启水印',
            fourWartermarkText: '水印文案',
            fiveTitle: '其它设置',
            fiveTagsStyle: 'Tagsview 风格',
            fiveAnimation: '主页面切换动画',
            fiveColumnsAsideStyle: '分栏高亮风格',
            fiveColumnsAsideLayout: '分栏布局风格',
            sixTitle: '布局切换',
            sixDefaults: '默认',
            sixClassic: '经典',
            sixTransverse: '横向',
            sixColumns: '分栏',
            tipText: '点击下方按钮，复制布局配置去 `src/stores/themeConfig.ts` 中修改。',
            copyText: '一键复制配置',
            resetText: '一键恢复默认',
            copyTextSuccess: '复制成功！',
            copyTextError: '复制失败！',
        },
        upgrade: {
            title: '新版本升级',
            msg: '新版本来啦，马上更新尝鲜吧！不用担心，更新很快的哦！',
            desc: '提示：更新会还原默认配置',
            btnOne: '残忍拒绝',
            btnTwo: '马上更新',
            btnTwoLoading: '更新中',
        },
        table: {
            no: "序号",
            preview: "预览",
            noData: "暂无数据",
            setting: "设置",
            drag: "拖拽排序",
            columns: "列显示",
            multi: "多选",
            print: "打印",
            refresh: "刷新"
        },
        searchPanel: {
            search: "查询",
            reset: "重置",
            condition: "搜索条件"
        },
        importor: {
            download: "下载模板",
            drag: "拖拽文件到这里或者",
            click: "点击选择文件",
            tip: "先下载模板，在模板中编辑，然后上传模板的xlsx文件"
        },
        uploadFile: {
            select: "选择文件",
            total: "共计{count}个文件"
        },
        echart: {
            addition: "附加"
        },
        iconselector: {
            placeholder: "请点击选择或输入名称搜索",
            select: "请选择图标",
            noicon: "没有找到图标"
        },
        common: {
            vm: {
                add: '新增',
                batchdelete: '批量删除',
                import: '导入',
                export: '导出',
                operate: '操作',
                edit: '修改',
                detail: '详情',
                delete: '删除',
                deletetip: '确定删除吗?',
                cancel: '关闭',
                submit: '提交',
                submittip: '提交成功',
                importtip: '导入数据错误，点击下载错误文件',
                input: '{input}是必填项',
                check: '请选择',
                importsuc: '成功导入{count}条数据',
                action_privilege: '分配权限',
                FrameworkTenantAdminRoleCodeTip: '使用所选角色的权限建立本租户的管理员,账号 admin 密码000000',
                tips_bool_true: '是',
                tips_bool_false: '否',
                all: '全部',
                download: '下载',
                mainsite: '主站'
            },
            requesterror: '调用接口失败',
            noright: '您没有这个页面的访问权限',
            out: '您的登录信息已过期，请重新登陆',
        },
        menukey: {
            SystemManagement: '系统管理',
            ActionLog: '日志',
            UserManagement: '用户管理',
            RoleManagement: '角色管理',
            GroupManagement: '用户组管理',
            MenuMangement: '菜单管理',
            DataPrivilege: '数据权限',
            FrameworkTenant: '租户管理'
        }
    }
};
