<template>
    <div class="release">
        <release-type @change="getReleaseTypeValue"></release-type>
        <release-project v-show="releaseId == 0"></release-project>
        <release-activity v-show="releaseId == 1"></release-activity>
        <release-master v-show="releaseId == 2"></release-master>
        <release-hometown v-show="releaseId == 3"></release-hometown>
        <release-job v-show="releaseId == 4"></release-job>
        <release-apply v-show="releaseId == 5"></release-apply>
        <release-other v-show="releaseId == 6"></release-other>
    </div>
</template>



<script>
    import { Scroller } from 'vux'
    import ReleaseType from './components/Type' //发布类型选择
    import ReleaseProject from './components/Project' //工程项目表单组件
    import ReleaseActivity from './components/Activity' //联谊聚会表单组件
    import ReleaseMaster from './components/Master' //拜师傅表单组件
    import ReleaseHometown from './components/Hometown' //找老乡表单组件
    import ReleaseJob from './components/Job' //招聘电工表单组件
    import ReleaseApply from './components/Apply' //应聘职位表单组件
    import ReleaseOther from './components/Other' //其他类型表单组件

    export default {
        name:'release',
        components:{
            Scroller,
           // CommonTabbar,//底部导航组件
            ReleaseType, //发布类型选择组件
            ReleaseProject, //工程项目表单组件
            ReleaseActivity, //联谊聚会表单组件
            ReleaseMaster,//拜师傅表单组件
            ReleaseHometown,//找老乡表单组件
            ReleaseJob,//招聘电工表单组件
            ReleaseApply, //求职应聘表单组件
            ReleaseOther, //其他类型表单组件
        },
        data(){
            return {
                releaseId : sessionStorage.releaseId || 0 //获取表单组件类型
            }
        },
        methods:{
            //获取子组件传过来的类型值
            getReleaseTypeValue(id){
                this.releaseId = id;
            }

    
        }
    }
</script>

<style lang="stylus" scoped>
  
</style>