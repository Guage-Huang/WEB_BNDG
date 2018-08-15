<template>
  <div class="loading" v-show="isToggle">
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </div>
</template>


<script>
  export default {
      name:'loading',
      props:{
        toggle:Boolean,
      },
      computed:{
        isToggle(){
            return this.toggle
        }
      }
  }
</script>


<style lang="stylus" scoped>
.loading{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    z-index: 9999;
}
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -20px;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  text-align: center;

  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  animation-delay: -1.0s;
}

@keyframes sk-rotate { 100% { transform: rotate(360deg); }}


@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}
</style>

