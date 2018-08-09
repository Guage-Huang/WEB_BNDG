<template>
    <div class="user">
        <user-info></user-info>
        <div class="canyu">
            <router-link to="/user/join">
                <img src=".././../assets/images/icon/activity.png" alt="">
                <span>我的项目活动及评价</span>
            </router-link>
        </div>
        <user-cells></user-cells>
    </div>
</template>


<script>
    import UserInfo from './components/Info'
    import UserCells from './components/Cells'
    export default {
        name:'user',
        components:{
            UserInfo,
            UserCells
        },
        mounted () {
            this.detectionSessionStorage('ownerTabIndex', sessionStorage.ownerTabIndex)
            this.detectionSessionStorage('wiremanTabIndex', sessionStorage.wiremanTabIndex)
        },
        methods:{
            detectionSessionStorage(key,value){
                if(value){
                    sessionStorage.removeItem(key)  
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .canyu
        margin:10px auto;
        padding:0 15px;
        text-align:center;
        a

            position: relative;
            display:inline-block;
            vertical-align:top;
            padding:0 .4rem 0 .6rem;
            width:4rem;
            height:.6rem;
            line-height .58rem;
            /*text-align:left;*/
            border:1px solid #ff8712;
            border-radius .6rem;
            background-color:white;
            color:#ff8712;
            box-sizing: border-box;
            img 
                position: absolute;
                left:.1rem;
                top:.08rem;
                width:.4rem;
                height:.4rem;
        a:after
            content: " ";
            display: inline-block;
            height: .12rem;
            width: .12rem;
            border-width: 1px 1px 0 0;
            border-color: #ff8712;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            position: relative;
            top: -2px;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 10px;
        
</style>
