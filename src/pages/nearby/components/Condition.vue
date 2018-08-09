<template>
    <div>
        <div class="stance"></div>
        <div class="condition">
            <div class="weui-flex align-center">
                <div class="weui-flex__item" :class="[conditionChooseType == 'number' ? 'condition-active' : '']" @click="handleConditionChoose('number')">
                    <div class="condition-evel">参加次数<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item" :class="[conditionChooseType == 'comment' ? 'condition-active' : '']" @click="handleConditionChoose('comment')">
                    <div class="condition-evel">好评度<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item" :class="[conditionChooseType == 'project' ? 'condition-active' : '']" @click="handleConditionChoose('project')">
                    <div class="condition-evel">擅长项目<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item" :class="[conditionChooseType == 'screen' ? 'condition-active' : '']" @click="handleConditionChoose('screen')">
                    <div class="condition-evel">
                        筛选 <i class="iconfont" style="top:1px;">&#xe74a;</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='stylus' scoped>
    .stance
        overflow:hidden;
        position: relative;
        height: 0;
        padding-bottom:40px;
    .condition::after
        content:'';
        position: absolute;
        left 0;
        bottom:0;
        width:100%;
        height:0;
        border-bottom:1px solid #ededed;
    .condition
        position: absolute;
        top:0;
        left:0;
        right:0;
        z-index:100;
        background-color: white
        width:100%;
        font-size: .26rem
        .weui-flex__item
            padding: 10px 0
            text-align: center
            color: #333
            font-weight: bold
            .condition-evel 
                position:relative;
                height: 20px;
                line-height: 20px;
            .condition-evel::after
                content: ''; 
                width: 1px; 
                height: 100%; 
                border-right: 1px solid #dfdfdf; 
                position: absolute; 
                right: 0; 
                top: 0;
        .weui-flex__item:last-child
            .condition-evel::after
                border-right:none;
        .condition-left
            position: absolute;
            left: 10px;
            top: 0;
            padding-top: 7.5px;
            .condition-region
                overflow: hidden;
                width:72px;
                height: 25px;
                line-height: 25px;
                color:#4c91ca;
                background-color: #f3f3f3;
                border-radius: 25px;
                padding: 0 5px;
                i
                    font-size: .40rem;
                span 
                    width: 52px;
                    line-height: 25px;
                    position: relative;
                    padding-right: 13px;
                    box-sizing: border-box;
                span:after
                    content: " ";
                    display: inline-block;
                    height: 5px;
                    width: 5px;
                    border-width: 1px 1px 0 0;
                    border-color: #999999;
                    border-style: solid;
                    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
                    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
                    position: absolute;
                    top: 50%;
                    margin-top: -4px;
                    right: 2px;
            .condition-ul
                display: none; 
                position: absolute;
                left: 0;
                top: 32px;
                width: 100%;
                max-height: 235px;
                padding: 0 10px;
                box-sizing: border-box;
                background-color:#f3f3f3;
                border-radius: 0 0 12.5px 12.5px;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                z-index: 999;
        .condition-active
            color:#ff8712;
            .condition-region
                border-radius:12.5px 12.5px 0 0;
            .condition-ul
                display: block;
                li
                    height:30px;
                    line-height:30px;
                    text-align:center;
                    position:relative;
                    color: #666;
                li::before
                    content:'';
                    width: 100%;
                    height: 0;
                    border-top: 1px solid #ededed;
                    position:absolute;
                    left: 0;
                    top: 0; 
                    z-index: 99;
    //清除滚动条
    .no-scrollbar::-webkit-scrollbar
        width: 0;
        height: 0;
    

</style>

<script>
   
    export default {
        name: 'condition',
        data(){
            return {
                cityToggle:false, //城市选择框是否显示
                conditionChooseType:null, //选择类型
            }
        },
        methods:{
            handleConditionChoose(_type){
                if(this.conditionChooseType == _type) {
                    this.conditionChooseType = null; 
                    this.$emit('change',this.conditionChooseType);
                }else{
                    this.conditionChooseType = _type
                    if(this.conditionChooseType == 'screen'){
                        this.$emit('change',this.conditionChooseType);
                        this.conditionChooseType = null;
                    }
                }
                
            }
        },
        components:{
        },
    }
</script>
