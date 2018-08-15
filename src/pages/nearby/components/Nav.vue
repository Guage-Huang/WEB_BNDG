<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="nav clearfix">
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="景点门票">
                </div>
                <div class="nav-text">电工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="必游榜单">
                </div>
                <div class="nav-text">水工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="动植物园">
                </div>
                <div class="nav-text">泥瓦工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png" alt="公园">
                </div>
                <div class="nav-text">油漆工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png" alt="游船游艇">
                </div>
                <div class="nav-text">木工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png" alt="景点门票">
                </div>
                <div class="nav-text">空调工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="名胜古迹">
                </div>
                <div class="nav-text">焊工</div>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/nearby/category">
                <div class="nav-image">
                    <img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="一日游">
                </div>
                <div class="nav-text">小工</div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'navs',
    data() {
      return {
       
      }
    },
    computed: {
       
    },
    methods: {
     
    },
    mounted() {
 
    }
  }
</script>
<style lang="stylus" scoped>
    .nav
        overflow: hidden;
        position: relative;
        height: 3.6rem;
        background-color: #fff;
    .nav-item
        float: left;
        width: 25%;
        height: 1.5rem;
        padding-top: .2rem;
        text-align: center;
    .nav-image
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
        img 
            width: 100%;
            height: 100%;
            display: block;
            border-radius:50%;
    .nav-text
        // margin-top: .1rem;
        color: #999
        font-size: .24rem
    .listitem-con
        display: -webkit-box
        display: -moz-box
        display: -ms-flexbox
        display: box
        width: 100%
        background-color: #fff
    .listitem-item
        overflow: hidden
        -webkit-box-flex: 1
        -moz-box-flex: 1
        -ms-flexbox-flex: 1
        box-flex: 1
        width: 0
        height: .98rem
        font-size: .28rem
        color: #212121
        line-height: .98rem
        text-align: center
        a
            display: block
            color: #212121
        i
            position:relative
            bottom:-1px
</style>
