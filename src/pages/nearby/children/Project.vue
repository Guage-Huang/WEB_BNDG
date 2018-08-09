<template>
    <div class="project">
        <detail-project-condition @change="monitorConditionChange"></detail-project-condition>
        <common-screen :toggle="srceenToggle" @change="monitorSrceenClose">
            <template slot="container">
                <div class="screen_slide" v-for="(item,index) in screenClassifyData" :key="item.id">
                    <div class="screen-title weui-flex align-center" @click="handleScreenConToggle(index)">
                        <div class="title">{{item.title}}</div>
                        <div class="weui-flex__item"></div>
                        <div class="gt">
                            <i :class="{down:item.toggle}"></i>
                        </div>
                    </div>
                    <div class="btns" v-show="item.toggle">
                        <div class="first">
                            <div v-for="(child,cindex) in item.child" :key="child.id" @click="handleScreenBtnChoose(index,cindex)">
                                <span :class='[item.childActive == cindex ? "active" : ""]'>{{child.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="weui-dialog__ft">
                    <div class="weui-dialog__btn weui-dialog__btn_default" id="screenReset" @click="handleScreenReset">重置</div>
                    <div class="weui-dialog__btn weui-dialog__btn_primary" id="screenSubmission">确认</div>
                </div>
            </template>
        </common-screen>
        <scroller lock-x scrollbarY height="-40" ref="scroller" >
            <div>
                 <detail-project-list></detail-project-list>
                 <common-prompt :info="promptData" v-show="false"></common-prompt>
            </div>
        </scroller>
    </div>
</template>
<script>
    import { Scroller } from 'vux'
    import CommonScreen from '../../../common/screen/Screen'
    import DetailProjectCondition from './components/Condition'
    import DetailProjectList from './components/ProjectList.vue'
    import CommonPrompt from '../../../common/prompt/Prompt'
    //筛选选择数据
    let screenClassifyData =  [{
        id: 0,
        title: '活动类型',
        child: [
            { id: 0,name: '全部', },
            { id: 1, name: '工程项目',},
            { id: 2, name: '联谊聚会',},
            { id: 3,name: '拜师傅',},
            { id: 4,name: '找老乡',},
            { id: 5,name: '招聘电工',},
            { id: 6,name: '求职应聘',},
            { id: 7,name: '其他类型',}
        ],
        childActive: null,
        toggle: true,
    }, 
    {
      id: 1,
      title: '行业类型',
      child: [
        { id: 0, name: '家庭用电',},
        { id: 1, name: '商场酒店用电',},
        { id: 2, name: '物业小区用电',},
        { id: 3, name: '工矿企业用电',},
        { id: 4, name: '配电工程', },
        { id: 5, name: '输变电工程',}
      ],
      childActive: null,
      toggle: true,
    }]
    export default {
        name:'nearbyDetailProject',
        components:{
            Scroller,
            CommonScreen, //筛选弹窗组件
            DetailProjectCondition, //参与项目条件组件
            DetailProjectList, //项目列表组件
            CommonPrompt, //无内容提示组件
        },
        data(){
            return {
                srceenToggle:false, //初始化将筛选弹窗关闭
                screenClassifyData, //筛选数据
                //无内容提示框数据
                promptData:{
                    title:'暂时没有参与项目', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
        methods: {
            //监听条件返回的某个条件
            monitorConditionChange(_type){
                let _index;
                if(_type == 'date'){
                    _index = 1
                }else if(_type == 'distance'){
                    _index = 2
                }else if(_type == 'project'){
                    _index = 3
                }else if(_type == 'screen'){
                    _index = 4
                }else{
                    _index = 0
                }
                if(_index === 4){
                    this.srceenToggle = true;
                }
            },
            //监听筛选框关闭
            monitorSrceenClose(toggle){
                this.srceenToggle = toggle;
            },
              //处理筛选内容显示隐藏
            handleScreenConToggle(index){
                let item = this.screenClassifyData[index]
                item.toggle = !item.toggle
               // this.$set(this.screenClassifyData,index,item)
            },
            //处理筛选内容选择
            handleScreenBtnChoose(pindex,cindex){
                let item = this.screenClassifyData[pindex]
                if(item.childActive !== cindex){
                    item.childActive = cindex
                }else{
                    item.childActive = null
                }
               //this.$set(this.screenClassifyData,pindex,item)
            },
            //处理筛选重置按钮
            handleScreenReset(){
                let items = this.screenClassifyData
                for(let item in items){
                    items[item].childActive = null
                }
            }
        }
    }
</script>