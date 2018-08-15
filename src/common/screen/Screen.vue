<template>
    <div class="screen">
        <div class="screen_dialog">
            <div class="weui-mask transition" :class="{fadehide:!toggle}" @click="handleScreenClose"></div>
            <div class="weui-dialog transition" :class="{slideRight:!toggle}">
                <div class="weui-dialog__bd">
                    <div class="screen_wrapper">
                        <slot name='container'></slot>
                    </div>
                </div>
                <slot name='footer'></slot>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>

    .transition
        -webkit-transition: all .4s;
        transition: all .4s;

    .fadehide
        opacity: 0;
        visibility: hidden;

    .slideRight
        -webkit-transform: translate(100%,0) !important;
        transform: translate(100%,0) !important;

    .screen_dialog .weui-dialog
        -webkit-transform:translate(0,0);
        transform:translate(0,0);
        max-width: none;
        width: 90%;
        height: 100vh;
        top: 0;
        left: auto;
        bottom:0;
        right:0;
        border-radius: 0;
        margin:0;


    .screen_dialog .weui-dialog__bd
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 48px;
        padding:0;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling:touch;    /* 用于 ios5+ */  
    
    .screen_dialog .weui-dialog__ft
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    
    .screen_dialog .weui-dialog__ft .weui-dialog__btn_primary
        background-color:#ff8712;
        color:white;
    
    .screen_dialog .screen-title
        overflow: hidden;
        padding: 10px;
        height: 20px;
        font-size: 15px;
        background-color:#f0f2f5;
    
    .screen_dialog .screen-title .gt i
        display: block;
        width: 10px;
        height: 10px;
        border-top: 1px solid #bfbfbf;
        border-right: 1px solid #bfbfbf;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        margin-left: 0px;
        margin-right: 2px;

    .screen_dialog .screen-title .gt i.down
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        margin-top: -6px;

    .screen_dialog .weui-dialog .btns
        padding-bottom: 10px;

    .screen_dialog .weui-dialog .btns .first,
    .screen_dialog .weui-dialog .btns .others
        margin-right: 10px;
        overflow: hidden;

    .screen_dialog .weui-dialog .btns .first div,
    .screen_dialog .weui-dialog .btns .others div
        margin-top: 10px;
        height: 29px;
        width: 33%;
        color: #232326;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 10px;
        float: left;
        box-sizing: border-box;
    
    .screen_dialog .weui-dialog .btns .first span,
    .screen_dialog .weui-dialog .btns .others span
        height: 28px;
        display: block;
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
        line-height: 29px;
        background-color: #f0f2f5;
        border-radius: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
    
    .screen_dialog .weui-dialog .btns .first span.active, 
    .screen_dialog .weui-dialog .btns .others span.active
        background-color: #fff;
        color: #ff8712;
        position: relative;
    
    .screen_dialog .weui-dialog .btns .first span.active:after, 
    .screen_dialog .weui-dialog .btns .others span.active:after 
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0;
        border: 1px solid #ff8712;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        box-sizing: border-box;
    
    .screen_dialog .weui-dialog .btns .first .all-btns
        color: #848689;
        text-align: right;
        background-color: #fff;
    
    .screen_dialog .weui-dialog .btns .first .all-btns i
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 1px solid #bfbfbf;
        border-right: 1px solid #bfbfbf;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        margin-left: 0px;
        margin-right: 2px;

    .screen_dialog .screen_slide
        border-bottom:1px solid #ededed;
        
    

</style>

<script>
    export default {
        name:'screen',
        props:{
            toggle:Boolean,
        },
        data(){
            return {
               
            }
        },
        methods:{
            handleScreenClose(){
                this.$emit('change',false)
            }
        }
    }
</script>

