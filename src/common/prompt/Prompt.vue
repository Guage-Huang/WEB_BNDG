<template>
    <div class="prompt">
        <div class="prompt-box">
            <div>
                <div class="prompt-icon" v-if="info.src">
                    <img :src="info.src" alt="" >
                </div>
                <div class="prompt-title mt5" v-if="info.title">{{info.title}}</div>
                <div class="prompt-desc f13 cl_b9 mt5" v-if="info.desc">{{info.desc}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .prompt
        position:fixed;
        left:0;
        right: 0;
        top:0;
        bottom: 0;
        background-color:white;
        z-index:99;
    .prompt-box
        width:100%;
        height: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:center;
 
    .prompt-icon
        width: 2rem;
        height: 2rem;
        margin:auto;
        img 
            width:100%;
            height:100%;
            display:block;
        


</style>


<script>
    
    export default {
        name:"prompt",
        props:{
            info:Object
        }
    }
</script>
