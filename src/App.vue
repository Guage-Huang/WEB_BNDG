<template>
  <div id="app" class="app">
    <loading :toggle="isLoading"></loading>
    <transition :name="transitionName" :mode="transitionMode">
      <keep-alive>
        <router-view class="child-view" :style="{bottom:tabbarShow?'53px':'0'}" v-if="$route.meta.isKeepAlive" ref="childView"/>
      </keep-alive>
    </transition>
    <transition :name="transitionName" :mode="transitionMode">
      <router-view class="child-view" :style="{bottom:tabbarShow?'53px':'0'}" v-if="!$route.meta.isKeepAlive" ref="childView"/>
    </transition>
    <common-tabbar v-show="tabbarShow" :tabbarActive="routeIndex"></common-tabbar>
    
  </div>
</template>

<script>
  let mapKey = 'NJQBZ-SBJWP-M6NDF-LH45A-YZ2Y6-BUBY3'
  let mapName = 'txmapforchuwaifung'
  window.geolocation = new qq.maps.Geolocation(mapKey,mapName)
  window.geolocationOpation = {failTipFlag: true}
  
  import { mapState } from 'vuex'
  import Loading from './common/loading/loading'
  import CommonTabbar from './common/tabbar/Tabbar'

  export default {
    name: 'App',
    components:{
      CommonTabbar,
      Loading
    },
    data(){
      return {
          //isLoading:true,
          transitionMode:'out-in',
          transitionName:'slide-left',
          tabbarShow:true,
          routeIndex:0,
      }
    },
    mounted(){
        this.monitorRouteMeta()
    },
    computed:{
      ...mapState(['isLoading'])
    },
    //监听路由的路径，可以通过不同的路径去选择不同的切换效果 
    watch: {
    　　'$route' (to, from) {
          this.monitorRouteMeta(to,from)
  　　　},
    },
    methods:{
        monitorRouteMeta(to,from){
          if(typeof(this.$route.meta.index) == 'undefined'){
            this.tabbarShow = false
            if(!to || !from) return;
            try{
              const toDepth = to.path.split('/').length
              const fromDepth = from.path.split('/').length
              this.transitionMode = 'in-out'

              if(to.path ==  '/clause')  {
                  this.transitionName = 'slide-left'
                  return;
              }
              if(from.path ==  '/clause'){
                this.transitionName = 'slide-right'
                  return;
              }
   
              this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }catch(e){
              console.log(e)
            }
          }else{
              this.tabbarShow = true
              this.transitionMode = 'out-in'
              this.transitionName = 'fade'
              this.routeIndex = this.$route.meta.index
          }
        },
    }
  }
</script>

<style lang="stylus">
    
  body
        font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        color: #212121;
        font-size: .28em;
        line-height: 1.2;
        -webkit-text-size-adjust: none;
  
  .app
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background: #f5f5f5;
  
  .fade-enter,.fade-leave-to
      opacity:0;

  .fade-enter-active,.fade-leave-active
      transition: opacity .1s ease;

  .child-view {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index: 999;
    background: #f5f5f5;
    -webkit-transition:opacity .3s ease-out, -webkit-transform .38s ease-in-out;
    transition: opacity .3s ease-out, transform .38s ease-in-out;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100vw, 0);
    transform: translate(100vw, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100vw, 0);
    transform: translate(-100vw, 0);
  }




</style>
