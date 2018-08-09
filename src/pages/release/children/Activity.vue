<template>
    <div class="activity">
        <div class="weui-cells-form__title">
            <span>四、活动说明</span><span class="cl_b9 f12 ml5">(选填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入活动说明" :autosize="true" :rows="5"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>五、活动流程</span><span class="cl_b9 f12 ml5">(选填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="processd-wrapper">
                        <div class="processd-item">
                            <div class="weui-flex align-top">
                                <div class="weui-flex__hd">
                                    <div class="processd-box__number">1</div>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="processd-box__title"> 集合时间和地点 </div>
                                </div>
                            </div>
                            <div class="processd-box__content">
                                <div class="processd-box__items">
                                    <div class="processd-box__item weui-flex active">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">
                                                我们提前<span>10</span>分钟在<span>广东省广州市白云区广园中路238号</span>
                                                <input class="set-input weui-input" type="text" placeholder="出口/楼层等,可不填" style="width:auto;">集合
                                            </div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex" >
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">大家到点直接在<span>广东省广州市白云区广园中路238号</span></div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <input class="f14 weui-input" type="text" placeholder="自定义" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="processd-item">
                            <div class="weui-flex align-top">
                                <div class="weui-flex__hd">
                                    <div class="processd-box__number">2</div>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="processd-box__title">聚会进行时</div>
                                </div>
                            </div>
                            <div class="processd-box__content">
                                <div class="processd-box__items">
                                    <div class="processd-box__item weui-flex active">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">开场可以玩些聚会小游戏，大家也可以增进了解</div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">我们直接进入聚会主题：<span>asdas阿斯达斯</span></div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">给大家说下聚会的玩法</div>
                                            <x-textarea placeholder="说说聚会具体怎么玩" :autosize="true" :rows="1"></x-textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="processd-item">
                            <div class="weui-flex align-top">
                                <div class="weui-flex__hd">
                                    <div class="processd-box__number">3</div>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="processd-box__title">
                                        聚会结束/下半场安排
                                    </div>
                                </div>
                            </div>
                            <div class="processd-box__content">
                                <div class="processd-box__items" >
                                    <div class="processd-box__item weui-flex active">
                                        <div class="weui-flex__hd">
                                           <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">
                                                一场活动玩不够，我们还可以去
                                                <input class="set-input weui-input" type="text" placeholder="例如：附近的桌游馆玩几盘桌游" style="text-align:left; width:100%;" disabled="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <div class="f14">还没有想好下半场，到时再说</div>
                                        </div>
                                    </div>
                                    <div class="processd-box__item weui-flex">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__item">
                                            <input class="f14 weui-input" type="text" placeholder="自定义" disabled="">
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells-primary" style="padding:.4rem 10%;">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-btn weui-btn_primary" style="margin-right:10px;" @click="handleGoBackPage">上一步</div>
                </div>
                <div class="weui-flex__item">
                    <div class="weui-btn weui-btn_primary">发布</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>


    .processd-wrapper
        position: relative;
        padding-top: 25px;
    
    .processd-wrapper::before
        content:"";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color:#ff8712;
        position: absolute;
        left: 20px;
        top: 0;
    .processd-wrapper::after
        content:"";
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color:#ffffff;
        position: absolute;
        left: 24px;
        top: 4px;
    
    .processd-item{
        border:1px solid #dddddd;
        border-radius: 5px;
        padding: 0 15px 10px;
        position: relative;
        margin-bottom: 12px;
    }

    .processd-item:last-child{
        margin-bottom: 0;
    }

    .processd-item:first-child:before{
        content:"";
        width: 5px;
        height: 8px;
        background-color:#dddddd;
        position: absolute;
        left: 24px;
        top: -8px;
    }

    .processd-item::after{
        content:"";
        width: 5px;
        height: 13px;
        background-color:#dddddd;
        position: absolute;
        left: 24px;
        bottom: -13px;
    }

    .processd-item:last-child::after{
        display: none;
    }

    .processd-box__title{
        padding: 10px 0;
        position: relative;
        font-size: 18px;
    }
    .processd-box__title::after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #dddddd;
        color: #dddddd;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        z-index: 2;
    }
    .processd-box__number{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        background-color:#ff8712;
        color:white;
        margin-top: 12px;
        margin-right: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .processd-box__content{
        padding-left:30px;
        padding-top: 10px;
    }


    .processd-box__item{
        color:#999999;
        margin-bottom: 5px;
        line-height: 26px;
    }
    .processd-box__item:last-child{
        margin-bottom: 0;
    }
    .processd-box__item .weui-icon-checkbox_circle{
        margin-left: 0;
        margin-right: 10px;
        position: relative;
        bottom: -1px;
    }

    .processd-box__item .set-input{
        display: inline-block;
        vertical-align:middle;
        border-bottom: 1px solid #dddddd;
        text-align: center;
    }

    .processd-box__item span{
        text-decoration: underline;
        margin: 0 3px;
        color:#999999;
    }

    .processd-box__item.active{
        color:#333333;
    }
    .processd-box__item.active span{
        color:#1170d6;
    }

    .radio-icon
        width: .34rem;
        height: .34rem;
        margin-top: 5px;

    .processd-item .weui-cell.vux-x-textarea
        padding:0;
        color:#333;
        line-height: normal;
    .processd-item .weui-cell.vux-x-textarea::before
        border:none;
    

</style>
<script>
    import { XTextarea,PopupPicker } from "vux"
    export default {
        name:"nextActivity",
        components: {
            XTextarea,
            PopupPicker
        },
        methods:{
            //返上一页
            handleGoBackPage(){
                this.$router.go(-1)
            }
        }
    }
</script>
