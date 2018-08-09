<template>
    <div class="introduce-edit">
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入企业简介" :autosize="true" :rows="5"></x-textarea>
        </div>
        <div class="weui-cells-primary mt50  bg-none">
            <div class="weui-btn weui-btn_primary">提交</div>
        </div>
    </div>
</template>

<script>
    import {XTextarea} from 'vux'
    export default {
        name:"introduceEdit",
        components:{
            XTextarea,
        }
    }
</script>

<style lang="stylus" scoped>

</style>
