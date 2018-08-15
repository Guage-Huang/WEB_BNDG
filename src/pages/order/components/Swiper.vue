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
    </div>
</template>

<script>
  export default {
    name: 'IndexSwiper',
    data() {
      return {
        swiperImages:[
           {id:0,title:'图1',img:require('@/assets/images/swiper/b1.jpg')},
           {id:1,title:'图2',img:require('@/assets/images/swiper/b2.jpg')},
           {id:1,title:'图3',img:require('@/assets/images/swiper/b3.jpg')}
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
        overflow:hidden
        width:100%
        height:0;
        padding-bottom:52.5%;
    .swiper-image
        width: 100%;
        //height: 3.86rem;
        display:block;
</style>
