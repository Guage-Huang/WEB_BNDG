<template>
    <div class="choose-address">
        <iframe id="mapPage" width="100%" height="100%" frameborder=0
            src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
        </iframe>
    </div>
</template>


<style lang="stylus" scoped>
    .choose-address
        position:absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;

</style>

<script> 

    export default {
        name:'address',
        mounted(){
            let self = this;
            window.addEventListener('message', function(event){
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                var location = event.data;
                if (location && location.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    sessionStorage.location = JSON.stringify(location)
                    console.log(location)
                    //this.$router.go(-1);
                }
            } , false);
        },
        destroyed(){
            
        },
        methods:{
           handleLocationMessage(event) {
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                var location = event.data;
                if (location && location.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    sessionStorage.location = JSON.stringify(location)
                    this.$router.go(-1);
                }
            }
        }
    } 

    

</script>