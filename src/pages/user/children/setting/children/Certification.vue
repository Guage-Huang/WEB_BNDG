<template>
    <div class="certification">
        <div class="weui-cells not-border-cells">
            <x-switch title="业主实名认证"></x-switch>
        </div>
    </div>
</template>

<script>
    import { XSwitch } from 'vux'
    export default {
        name:"certification",
        components: {
            XSwitch
        }
    }
</script>

<style lang="stylus" scoped>
    .certification>>>.weui-switch
        &:checked
            border-color: #ff8712 !important;
            background-color: #ff8712 !important;

</style>
