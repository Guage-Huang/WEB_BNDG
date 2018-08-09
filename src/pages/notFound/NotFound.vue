<template>
    <div class="not-found">
        <common-prompt :info="promptData"></common-prompt>
    </div>
</template>

<script>
    import CommonPrompt from '../../common/prompt/Prompt'
    export default {
        name:"notFound",
        components:{
            CommonPrompt,
        },
        data () {
            return {
                //无内容提示框数据
                promptData:{
                    title:'404！抱歉，您查看的页面不存在～～', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/404.png'), //提示小图标
                },
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
