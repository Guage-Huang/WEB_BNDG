<template>
    <div class="project">
        <div class="weui-cells-form__title">
            <span>一、基本信息</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.54rem; top:-.06rem; left:-.07rem; color:#1271ff">&#xe616;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">项目名称：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="name" placeholder="请输入项目名称">
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">项目地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address" placeholder="请输入项目地点">
                    <!-- <router-link to="/map/address" class="weui-form__address tlie_1">{{ address || "请选择项目地点"}}</router-link> -->
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#fbc00e">&#xe8c3;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">需求人数：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="number" placeholder="请输入需求人数">
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">人</span>
                </div>
            </div>
            <div class="weui-cell weui-cell__select">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">发布时间：</label>
                </div>
                <div class="weui-cell__bd">
                     <input class="weui-input" type="text" v-model="releaseDataTime" placeholder="请输入发布时间" readonly>
                </div>
            </div>
            <div class="weui-cell weui-cell__select">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">截止时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <datetime format="YYYY-MM-DD HH:mm" placeholder="请选择截止时间" :start-date="minReleaseDataTime" v-model="asDataTime" @on-change="getAsDateTimeVal"></datetime>
                </div>
            </div>
        </div>
        <div class="weui-cells-form__title">
            <span>二、项目信息</span><span class="cl_b9 f12 ml5">(必选)</span>
        </div>
        <div class="weui-cells not-border">
            <div class="weui-cell weui-cell__title">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#fb6d0e">&#xe623;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">所属行业：<span class="cl_b9 f12">(单选)</span></label>
                </div>
            </div>
            <div class="weui-cell weui-cell__choose">
                <div class="weui-cell__bd">
                    <div class="skill-items">
                        <div class="skill-item border" :class="[industryActive == index ? 'active' : '']"  v-for="(item,index) in industry" :key="item.id" @click="handleIndustryRadio(index)">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells not-border">
            <div class="weui-cell weui-cell__title">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:-.06rem; font-size:.44rem; color:#ed360c">&#xe625;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">项目内容：<span class="cl_b9 f12">(多选)</span></label>
                </div>
            </div>
            <div class="weui-cell weui-cell__choose">
                <div class="weui-cell__bd">
                    <div class="skill-items">
                        <div class="skill-item border" :class="[item.checked ? 'active' : '']" v-for="(item,index) in project" :key="item.id" @click="handleProjectCheck(index)"><span>{{item.name}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells not-border">
            <div class="weui-cell weui-cell__title">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#0b9dff">&#xe63f;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">工作内容：</label>
                </div>
            </div>
            <div class="weui-cell weui-cell__choose">
                <div class="weui-cell__bd">
                    <div class="work-items">
                        <div class="work-item weui-flex align-center" :class="[item.checked ? 'active' : '']"  v-for="(item,index) in industryContent" :key="item.id" v-if="index != industryContent.length - 1" @click="handleWorkCheck(index,$event)">
                            <div class="weui-flex__hd">
                                <div class="radio-icon"></div>
                            </div>
                            <div class="weui-flex__item">
                                <div>{{item.text}}</div>
                            </div>
                        </div>
                        <div class="work-item weui-flex align-center" :class="[industryContent[industryContent.length - 1].checked ? 'active' : '']"  v-else @click="handleWorkCheck(industryContent.length - 1,$event)">
                            <div class="weui-flex__hd">
                                <div class="radio-icon"></div>
                            </div>
                            <div class="weui-flex__item">
                                <input id="workInput" class="weui-input" type="text" placeholder="自定义">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells-primary">
            <div class="weui-btn weui-btn_primary" @click="handleFormNext">下一步</div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
    function formValiAlear(content,that){
        if(!that) console.log('请带上this')
        // 显示
        that.$vux.alert.show({
            title: '验证信息',
            content: content,
            onShow () {},
            onHide () {}
        })
    }

    import { Datetime } from 'vux'

    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate
    export default {
        name:'project',
        components:{
            Datetime,
        },
        data(){
            return {
                name:'商场酒店用电类项目', //项目名称
                address:'', //项目地点
                number:'10', //需求人数
                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间
                industry:[], //所属行业
                industryActive:0,
                project:[], //项目内容
                industryContent:[],//所属行业的工作内容

                /**其他 */
                minReleaseDataTime:getAsDate('date'),//最少截止时间
            }
        },
        mounted() {
            //初始化项目信息
            this.getMessageInfo()
            //获取项目地址
            // const location = JSON.parse(sessionStorage.location);
            // if(location.hasOwnProperty('poiaddress')){
            //    this.address = location.poiaddress
            // }
        },
        methods:{
            //获取发布时间
            // getReleaseDateTimeVal(newVal){
            //     this.releaseDataTime = newVal
            // },
            //获取截止时间
            getAsDateTimeVal(newVal){
                this.asDataTime = newVal
            },
            //初始化获取项目信息
            getMessageInfo(){
                 //添加请求拦截器
                this.$http.interceptors.request.use(function(config){
                    //在发送请求之前做某事
                    return config;
                },function(error){
                    //请求错误时做些事
                    return Promise.reject(error);
                });
                //添加响应拦截器
                this.$http.interceptors.response.use(function(response){
                    //对响应数据做些事
                    return response;
                },function(error){
                    //请求错误时做些事
                    return Promise.reject(error);
                })
           
               this.$http.get('./static/mock/release.json',{
                }).then(res => {
                    if(res.status == 200){
                        this.industry = res.data.industry
                        this.project = res.data.project
                        this.industryContent = res.data.industry[this.industryActive].content
                    }else{
                        console.log(' release '+' 数据异常 ')
                    }
                }).catch(err => {
                    console.log(err);
                }) 
            },
            //处理行业选择
            handleIndustryRadio(index){
                this.industryContent = this.industry[index].content
                this.industryActive = index
            },
            //处理项目内容
            handleProjectCheck(index){
                let projectInfo = this.project[index]
                    projectInfo.checked = !projectInfo.checked

                this.$set(this.project,index,projectInfo)
            },
            //处理工作内容
            handleWorkCheck(index,el){
                let industryContentInfo = this.industryContent[index]
                    industryContentInfo.checked = !industryContentInfo.checked

                let workInput = document.getElementById('workInput')

                if(index == this.industryContent.length - 1){
                    if(industryContentInfo.checked){
                        workInput.focus()
                    }else{
                        workInput.blur()
                    }
                }
                this.$set(this.industryContent,index,industryContentInfo)
            },
            //处理下一步内容
            handleFormNext(){
                let formData = {
                    name : this.name,
                    address : this.address,
                    number : this.number,
                    releaseDataTime : this.releaseDataTime,
                    asDataTime:this.asDataTime,
                    industry:[this.industry[this.industryActive]]
                }

                let project = this.project
                let projectArr = []
                for(let i in project){
                    if(project[i].checked){
                        //delete project[i].checked
                        projectArr.push(project[i])
                    }
                }
                formData.project = projectArr
                
                let industryContent = this.industryContent
                let industryContentArr = []
                for(let i in industryContent){
                    if(industryContent[i].checked){
                        //delete industryContent[i].checked
                        industryContentArr.push(industryContent[i])
                    }
                }
                formData.industryContent = industryContentArr

                if(formData.name == '' || formData.name == null || formData.name == undefined){
                   formValiAlear('项目名称不能为空',this)
                }else if(formData.address == '' || formData.address == null || formData.address == undefined){
                    formValiAlear('项目地点不能为空',this)
                }else if(formData.number == '' || formData.number == null || formData.number == undefined){
                    formValiAlear('需求人数不能为空',this)
                }else if(formData.industry.length == 0 || formData.industry == []){
                    formValiAlear('请选择所属行业',this)
                }else if(formData.project.length == 0 || formData.project == []){
                    formValiAlear('请选择项目内容',this)
                }else if(formData.industryContent.length == 0 || formData.industryContent == []){
                    formValiAlear('请选择工作内容',this)
                }else if(new Date(formData.releaseDataTime).getTime() >= new Date(formData.asDataTime).getTime()){
                     formValiAlear('截止时间不能小于发布时间',this)
                }
                else{
                    this.$router.push({ path:`/release/project`})
                }

            }
        }
    }
</script>