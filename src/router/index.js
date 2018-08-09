import Vue from 'vue'
import Router from 'vue-router'


import NotFound from '@/pages/notFound/NotFound' //404页面

import Index from '@/pages/index/Index' //首页
import Release from '@/pages/release/Release' //发布页面
import Nearby from '@/pages/nearby/Nearby' //附近页面
import Communicate from '@/pages/communicate/Communicate' //附近页面
import User from '@/pages/user/User' //会员中心

import Detail from '@/pages/detail/Detail' //发布详情页面
import DetailLeaveMessage from '@/pages/detail/children/LeaveMessage' //留言页面

import NextProject from '@/pages/release/children/Project' //发布-工程项目-下一步页面
import NextActivity from '@/pages/release/children/Activity'//发布-联谊活动-下一步页面

import NearbyDetail from '@/pages/nearby/children/Detail' //附近详情页面
import NearbyDetailProject from '@/pages/nearby/children/Project' //附近详情参与项目页面
import NearbyDetailCase from '@/pages/nearby/children/Case' //附近详情经典案例页面
import NearbyDetailComment from '@/pages/nearby/children/Comment' //附近详情业主评价页面

import CommunicateDetail from '@/pages/communicate/children/Detail' //通讯录好友详细资料

import UserJoin from '@/pages/user/children/join/Join' //会员中心-我参与的活动与评论
import UserOwner from '@/pages/user/children/owner/Owner' //会员中心-业主注册
import LicenseAdd from '@/pages/user/children/owner/children/LicenseAdd' //会员中心-业主注册-新增证照
import IntroduceAdd from '@/pages/user/children/owner/children/IntroduceAdd' //会员中心-业主注册-新增企业展示
import IntroduceEdit from '@/pages/user/children/owner/children/IntroduceEdit' //会员中心-业主注册-企业展示-修改
import UserWireman from '@/pages/user/children/wireman/Wireman' //会员中心-电工注册
import CaseAdd from '@/pages/user/children/wireman/children/CaseAdd' //会员中心-电工注册-新增案例
import UserAttention from '@/pages/user/children/attention/Attention' //会员中心-我的关注
import UserCircle from '@/pages/user/children/circle/Circle' //会员中心-我的圈子
import UserSetting from '@/pages/user/children/setting/Setting' //会员中心-系统管理
import SettingEaudit from '@/pages/user/children/setting/children/Eaudit' //会员中心-系统管理-电工审核
import SettingEauditDetail from '@/pages/user/children/setting/children/Detail' //会员中心-系统管理-电工审核-详情
import SettingOStatistics from '@/pages/user/children/setting/children/OStatistics' //会员中心-系统管理-业主统计
import SettingEStatistics from '@/pages/user/children/setting/children/EStatistics' //会员中心-系统管理-电工统计
import SettingSystem from '@/pages/user/children/setting/children/System' //会员中心-系统管理-系统设置
import SettingSystemCertification from '@/pages/user/children/setting/children/Certification' //会员中心-系统管理-系统设置-实名认证
import SettingSystemRelease from '@/pages/user/children/setting/children/Release' //会员中心-系统管理-系统设置-发布设置
import SettingSystemJoin from '@/pages/user/children/setting/children/Join' //会员中心-系统管理-系统设置-参加设置
import SettingSystemBlacklist from '@/pages/user/children/setting/children/Blacklist' //会员中心-系统管理-系统设置-黑名单设置

import Clause from '@/pages/other/Clause' //法律条款

import Map from '@/pages/map/Map'
import MapAddress from '@/pages/map/components/Address'

Vue.use(Router)

let routerConfig = [
  { path:'/', name:'index', component: Index, meta:{index:0, isKeepAlive: false} },
  { path:'/release', name:'release', component: Release,meta:{index:1,title:'发布'} },
  { path:'/nearby', name:'nearby', component: Nearby, meta:{ index:2,title:'附近'} },
  { path:'/communicate', name:'communicate', component: Communicate, meta:{ index:3,title:'消息'} },
  { path:'/communicate/detail', name:'communicateDetail', component: CommunicateDetail, meta:{title:'详细资料'} },
  { path:'/user', name:'user', component: User, meta:{index:4,title:'个人中心'} },
  { path:'/detail/:type/:id', name:'detail', component: Detail, meta:{title:'详情',}},
  { path:'/detail/lmessage', name:'lmessage', component: DetailLeaveMessage, meta:{title:'添加留言'}},
  { path:'/release/project', name:'releaseProject', component: NextProject,meta:{title:'项目工程-下一步'}},
  { path:'/release/activity', name:'releaseActivity', component: NextActivity,meta:{title:'联谊聚会-下一步'} },
  { path:'/nearby/detail', name:'nearbyDetail', component: NearbyDetail, meta:{title:'附近详情'} },
  { path:'/nearby/detail/project', name:'nearbyDetailProject', component: NearbyDetailProject, meta:{title:'附近详情-参与项目'} },
  { path:'/nearby/detail/case', name:'nearbyDetailCase', component: NearbyDetailCase, meta:{title:'附近详情-经典案例'}},
  { path:'/nearby/detail/comment', name:'nearbyDetailComment', component: NearbyDetailComment, meta:{title:'附近详情-业主评价'}},
  { path:'/user/join', name:'userJoin', component: UserJoin, meta:{title:'我的项目活动及评价'} },
  { path:'/user/owner', name:'userOwner', component: UserOwner, meta:{title:'业主注册'}},
  { path:'/user/owner/licenseadd', name:'licenseAdd', component: LicenseAdd, meta:{title:'证照新增'}},
  { path:'/user/owner/introduceadd', name:'introduceAdd', component: IntroduceAdd, meta:{title:'企业展示新增'}},
  { path:'/user/owner/introduceedit', name:'introduceEdit', component: IntroduceEdit, meta:{title:'企业简介修改'}},
  { path:'/user/wireman', name:'userWireman', component: UserWireman, meta:{title:'电工注册'} },
  { path:'/user/wireman/caseadd', name:'caseAdd', component: CaseAdd, meta:{title:'新增案例'}},
  { path:'/user/attention', name:'userAttention', component: UserAttention, meta:{title:'我的关注'}},
  { path:'/user/circle', name:'userCircle', component: UserCircle, meta:{title:'电工圈子'} },
  { path:'/user/setting', name:'userSetting', component: UserSetting, meta:{title:'系统管理'} },
  { path:'/user/setting/eaudit', name:'settingEaudit', component: SettingEaudit, meta:{title:'电工审核'} },
  { path:'/user/setting/eaudit/detail', name:'settingEauditDetail', component: SettingEauditDetail, meta:{title:'审核详情'} },
  { path:'/user/setting/ostatistics', name:'SettingOStatistics', component: SettingOStatistics, meta:{title:'业主统计'} },
  { path:'/user/setting/estatistics', name:'SettingEStatistics', component: SettingEStatistics, meta:{title:'电工统计'} },
  { path:'/user/setting/system', name:'SettingSystem', component: SettingSystem, meta:{title:'系统设置'} },
  { path:'/user/setting/system/certification', name:'SettingSystemCertification', component: SettingSystemCertification, meta:{title:'实名认证'} },
  { path:'/user/setting/system/release', name:'SettingSystemRelease', component: SettingSystemRelease, meta:{title:'发布设置'} },
  { path:'/user/setting/system/join', name:'SettingSystemJoin', component: SettingSystemJoin, meta:{title:'参加设置'} },
  { path:'/user/setting/system/blacklist', name:'SettingSystemBlacklist', component: SettingSystemBlacklist, meta:{title:'黑名单设置'} },
  { path:'/clause', name:'clause', component: Clause, meta:{title:'电工云家法律条款'} },
  {path: '*',component: NotFound,name: 'notfound',meta: {title: '404-页面丢了'}
}
]

// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}


const router = new Router({
    mode:'history',
  // hashbang: false,
  // history: true,
  // saveScrollPosition: true,
  // suppressTransitionError: true,
  routes: routerConfig,
  scrollBehavior (to, from, savedPosition) {
    // 从第二页返回首页时savedPosition为undefined
    if (savedPosition || typeof savedPosition === 'undefined') {
      // 只处理设置了路由元信息的组件
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : false
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : true
      if (savedPosition) {
        return savedPosition
      }
    } else {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : true
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : false
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '广州速码网络技术有限公司'
  if (!to.query.url && from.query.url) {
      to.query.url = from.query.url
  }
  next()
})



export default router
