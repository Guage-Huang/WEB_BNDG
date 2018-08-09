<template>
     <div class="type" :class="[releaseToggle ? 'active' : '']">
        <div class="title" @click="handleReleaseTypeToggle">
            <span>{{releaseTitle}}</span>
        </div>
        <ul class="ul" v-show="releaseToggle">
            <li class="border tlie_1" :class="[releaseId == item.id ? 'active' : '']" v-for="item in releaseType" :key="item.id" @click="handleReleaseTypeChoose(item.id,item.name)">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
    .type
        padding-bottom:.2rem;
        background-color:white;
        .title
            padding:.3rem .4rem .1rem;
            text-align center;
            span 
                color:#ff8712;
                position:relative;
                padding-right:.4rem;
                font-size:.34rem;
                font-weight: bold;
            span::after
                content: " ";
                display: inline-block;
                height: .14rem;
                width: .14rem;
                border-width: 1px 1px 0 0;
                border-color: #ff8712;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
                top: -.04rem;
                position: absolute;
                top: 50%;
                margin-top: -.04rem;
                right: .04rem;
        .ul
            padding:0 .4rem 0;
            li
                display: inline-block;
                width:28%;
                text-align:-webkit-center;
                text-align:center;
                line-height:.65rem;
                border-radius:5px;
                color:#999999;
                padding:0 .16rem;
                margin-top:.2rem;
                margin-right:7.5%;
                font-size:.3rem;
                box-sizing:border-box;
            li:nth-child(3n)
                margin-right:0;
            li::before{
                border-radius .2rem;
            }
            li.active
                background-color:#ff8712
                color:white;
            li.active::before
                border-color:#ff8712;
    .type.active 
        span:after
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
            margin-top: -.1rem;


</style>


<script>
    export default {
        name : 'type',
        data(){
            return {
                releaseToggle: false, //默认不开启发布分类选择,
                releaseTitle:'找帮手',//发布标题
                //发布选中值
                releaseId: 0,
                //发布类型
                releaseType:[
                    { id: 0, name: '找帮手' },
                    { id: 1, name: '商务联谊' },
                    { id: 2, name: '拜师傅' },
                    { id: 3, name: '找老乡' },
                    { id: 4, name: '招聘电工' },
                    { id: 5, name: '求职应聘' },
                    { id: 6, name: '电工聚会' }
                ],
            }
        },
        mounted(){
            //加载浏览器默认储存的值
            this.getSessionTrorage();
        },
        methods:{

            //获取浏览器储存的值,初始化发布是否开启
            getSessionTrorage(){
                this.releaseToggle = sessionStorage.releaseToggle === 'false' ? false : true || false;
                this.releaseId = sessionStorage.releaseId || 0
                this.releaseTitle = sessionStorage.releaseTitle || '工程项目'
            },

            //处理发布分类显示隐藏事件
            handleReleaseTypeToggle(){
                this.releaseToggle = !this.releaseToggle;
                sessionStorage.releaseToggle = this.releaseToggle;
            },

            //处理选择具体类型事件
            handleReleaseTypeChoose(id,name){
                this.releaseId = id;
                this.releaseTitle = name;

                sessionStorage.releaseId = this.releaseId;
                sessionStorage.releaseTitle = this.releaseTitle;
                //向父组件传递当前选中值
                this.$emit('change',this.releaseId)

                //关闭类型选择
                //this.handleReleaseTypeToggle();
            },
            
        }
    }
</script>
