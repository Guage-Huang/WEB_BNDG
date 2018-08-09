<template>
    <div class="user-cells">
        <div class="cells">
            <div class="cell">
                <div class="weui-cells not-border-cells weui-cells-bg_none" @click="handleCellContentToggle('basicInfo')">
                    <div class="weui-cell weui-cell_access" :class="{access_down:toggle.basicInfoToggle}">
                        <div class="weui-cell__hd">
                            <div class="cell-icon">
                                <i class="iconfont fb" style="color:#b14935">&#xe60b;</i>
                            </div>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="cell-label">基本情况</div>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells not-border-cells cell-info" v-show="toggle.basicInfoToggle">
                    <div class="weui-cell cell-info-title">
                        <div class="weui-cell__bd">
                            <span>1、基本信息</span>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">联系电话：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">18565429426</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">男</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">19</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">广东省广州市</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">3年</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-item">
                        <div class="cell-info-dot"></div>
                        <div class="weui-cell__hd">
                            <label class="weui-label">常住地址：</label>
                        </div>
                        <div class="weui-cell__bd">
                            <div><span class="cl_b9">广东省广州市白云区广园中路283号</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-title">
                        <div class="weui-cell__bd">
                            <span>2、自我介绍</span>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-textarea">
                        <div class="weui-cell__bd">
                            <div class="textarea"><span class="cl_b9">123</span></div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-title">
                        <div class="weui-cell__bd">
                            <span>3、技能证书</span>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-certificate" style="padding-bottom:5px;">
                        <div class="weui-cell__bd">
                            <div class="weui-uploader">
                                <div class="weui-uploader__bd">
                                    <ul class="weui-uploader__files" id="uploaderFiles">
                                        <li class="weui-uploader__file" style="background-image:url(https://weui.io/images/pic_160.png)"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="weui-cells not-border-cells weui-cells-bg_none" @click="handleCellContentToggle('industrySkills')">
                    <div class="weui-cell weui-cell_access" :class="{access_down:toggle.industrySkillsToggle}">
                        <div class="weui-cell__hd">
                            <div class="cell-icon">
                                <i class="iconfont fb" style="color:#ec4690; top:-1px;">&#xe67a;</i>
                            </div>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="cell-label">行业技能</div>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells not-border-cells cell-info" v-show="toggle.industrySkillsToggle">
                    <div class="weui-cell cell-info-title align-top">
                        <div class="weui-cell__hd">
                            <span class="mr10 cl_b9">1、电压等级：</span>
                        </div>
                        <div class="weui-cell__bd">
                            <div>
                                <span class="cl_b9">低压电工</span>
                            </div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-title align-top">
                        <div class="weui-cell__hd">
                            <span class="mr10 cl_b9">2、擅长项目：</span>
                        </div>
                        <div class="weui-cell__bd">
                            <div>
                                <span class="cl_b9">家庭用电</span>
                            </div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-title align-top">
                        <div class="weui-cell__hd">
                            <span class="mr10 cl_b9">3、操作分类：</span>
                        </div>
                        <div class="weui-cell__bd">
                            <div>
                                <span class="cl_b9">安装调试</span>
                                <span class="cl_b9">、维护保养</span>
                                <span class="cl_b9">、检修试验</span>
                            </div>
                        </div>
                    </div>
                    <div class="weui-cell cell-info-title align-top">
                        <div class="weui-cell__hd">
                            <div><span class="mr10 cl_b9">4、工作内容：</span></div>
                        </div>
                        <div class="weui-cell__bd">
                            <ul class="cell-work-items">
                                <li><span class="cl_b9">1、入户电箱</span><i class="ml20 green">√</i></li>
                                <li><span class="cl_b9">2、室内电路布线</span><i class="ml20 green">√</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="weui-cells not-border-cells weui-cells-bg_none">
                    <router-link class="weui-cell weui-cell_access" to="/nearby/detail/project">
                        <div class="weui-cell__hd">
                            <div class="cell-icon">
                                <i class="iconfont fb" style="color:#ed360c; top:-2px;">&#xe625;</i>
                            </div>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="cell-label">参与项目</div>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="weui-cells not-border-cells weui-cells-bg_none">
                    <router-link class="weui-cell weui-cell_access" to="/nearby/detail/case">
                        <div class="weui-cell__hd">
                            <div class="cell-icon">
                                <i class="iconfont fb" style="color:#999; top:-1px;">&#xe63c;</i>
                            </div>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="cell-label">经典案例</div>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="weui-cells not-border-cells weui-cells-bg_none">
                    <router-link class="weui-cell weui-cell_access" to="/nearby/detail/comment">
                        <div class="weui-cell__hd">
                            <div class="cell-icon">
                                <i class="iconfont fb" style="color:#eec229;">&#xe77c;</i>
                            </div>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="cell-label">业主评价</div>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name:'userCells',
        props:{
            toggle:Object,
        },
        data(){
            return {
            }
        },
        mounted() {
        },
        watch:{
            
        },
        computed:{
           
        },
        methods:{
            handleCellContentToggle(name){
                if(name == 'basicInfo'){
                    this.toggle.basicInfoToggle = !this.toggle.basicInfoToggle
                }else if(name == 'industrySkills'){
                    this.toggle.industrySkillsToggle = !this.toggle.industrySkillsToggle
                }else{
                    this.toggle.basicInfoToggle = !this.toggle.basicInfoToggle
                    this.toggle.industrySkillsToggle = !this.toggle.industrySkillsToggle
                }
                this.$emit('change',{
                        basicInfoToggle:this.toggle.basicInfoToggle,
                        industrySkillsToggle:this.toggle.industrySkillsToggle,
                    }
                )
            }
        }
    }
</script>


<style lang="stylus" scoped>
    .weui-cells-bg_none
        background-color:#f6f6f6;

    .cell
        border-bottom:1px solid #ededed;

    .cell-icon
        overflow:hidden;
        width:.4rem;
        height:.4rem;
        text-align:center;
        line-height:.4rem;
        display:block;
        margin-right:.18rem;
        i 
             font-size:.4rem;
    .cell-label
        font-weight:bold;
    .weui-cell_access .weui-cell__ft:after
        border-color:#ccc;

    .access_down .weui-cell__ft:after
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);



    .cell-info .weui-cell
        padding-left:40px;

    .cell-info .cell-info-title::before
        left:60px;


    .cell-info-dot
        width:8px;
        height:8px;
        border-radius:50%;
        background-color:#ff8712;
        margin-right:10px;

    .cell-info .cell-info-item
        padding:5px 15px 5px 60px;
    
    .cell-info .cell-info-item::before{
        left:60px;
    }

    .cell-info .cell-info-item .weui-label
        color:#999;

    .cell-info .cell-info-textarea,
    .cell-info .cell-info-certificate
        padding-top:0;
        padding-left:60px;

    .cell-info-textarea::before,
    .cell-info-certificate::before
        border:none;
        
    .cell-info-textarea .textarea
        padding:10px;
        min-height:60px;
        background-color:#f6f6f6;

    .cell-work-items
        li
            margin-top:5px;
            &:first-child{
                margin-top: 0;
            }

</style>