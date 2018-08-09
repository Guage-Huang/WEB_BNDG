<template>
    <div class="nearby-detail">
        <detail-user-message :toggle="messageContentToggle" @change="getMessageContentToggle"></detail-user-message>
        <detail-user-cells :toggle="cellCotentToggle" @change="getCellContentToggle"></detail-user-cells>
    </div>
</template>
<script>
    import DetailUserMessage from './components/UserMessage'
    import DetailUserCells from './components/UserCells'

    export default {
        name:'nearbyDetail',
        components:{
            DetailUserMessage,//头部师傅信息
            DetailUserCells, //列表内容

        },
        data(){
            return {
                cellCotentToggle:{
                    basicInfoToggle:false,
                    industrySkillsToggle:false,
                },
                messageContentToggle:{
                    basicInfoToggle:false,
                    industrySkillsToggle:false,
                },
            }
        },
        methods:{
            getMessageContentToggle(res){
                this.cellCotentToggle = res
            },
            getCellContentToggle(res){
                this.messageContentToggle = res
            }
        }
    }
</script>

