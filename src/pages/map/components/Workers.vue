<template>
    <div class="workers" id="workers">
        
    </div>
</template>


<style lang="stylus" scoped>
    .workers
        position:absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background-color:white;
        z-index: 99;

</style>

<script>
    export default {
        name:'MapWorkers',
        mounted(){
            this.mapInit()
        },
        computed:{
            
        },
        methods:{
            mapInit(){
                var params = this.$route.params
                var map = new qq.maps.Map(document.getElementById('workers'), {
                    center: new qq.maps.LatLng(params.lat,params.lng),      // 地图的中心地理坐标。
                    zoom:8                                                 // 地图的中心地理坐标。
                });
            }
        }
    } 
</script>