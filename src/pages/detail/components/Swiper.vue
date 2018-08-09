<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="swiper-stance">
        <swiper :options="swiperOption" ref="banner"  @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperImages" :key="index">
                <router-link to="">
                    <img class="swiper-image" :src="item.img" :alt="item.title" >
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination bgColor-white"  slot="pagination"></div>
            <!-- 
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> 
            -->
        </swiper>
        <div class="detail-e-data">
            <span>浏览：102</span>
            <span>收藏：0</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'IndexSwiper',
    data() {
      return {
        swiperImages:[
           {id:0,title:'图1',img:'http://s9.rr.itc.cn/r/wapChange/20178_7_23/a9dwgo53576594365405.jpg'},
           {id:1,title:'图2',img:'http://imgbdb3.bendibao.com/zzbdb/20166/6/20160606153138_89545.jpg'},
           {id:1,title:'图3',img:'http://img0.imgtn.bdimg.com/it/u=214306839,2760930393&fm=15&gp=0.jpg'}
        ],
        swiperOption: {
            loop:true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
            
            // prevButton:'.swiper-button-prev',
            // nextButton:'.swiper-button-next',
             // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            // ...
        },
      }
    },
    computed: {
        swiper() {
            return this.$refs.banner.swiper
        }
    },
    methods: {
        callback(e){
            console.log(e);
        },
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="stylus" scoped>
    .swiper-stance >>> .bgColor-white .swiper-pagination-bullet-active
        background-color:#fff 
    .swiper-stance >>> .swiper-pagination-bullet
        width: 8px
        height: 8px
    .swiper-stance
        overflow:hidden;
        position:relative;
        width:100%;
        height:0;
        padding-bottom:62.5%;
    .swiper-image
        width: 100%;
        //height: 3.86rem;
        display:block;

    .detail-e-data
        position:absolute;
        right:.2rem;
        bottom:.2rem;
        z-index:999;
        span 
            color:white;
            font-size:.24rem;
            margin-left:.2rem;

</style>
