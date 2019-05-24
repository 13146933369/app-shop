<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
            <transition name="fade">
                <span class="inner icon-remove_circle_outline"></span>
            </transition>
        </div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue';
    export default {
        props:{
            food:{
                type:Object
            }
        },
        created(){
          console.log(this.food)
        },
       methods:{
           addCart(event){
               if(!event._constructed){
                   return
               }
               if(!this.food.count){
                   Vue.set(this.food,'count',1);
               }else{
                   this.food.count++;
               }
           },
           decreaseCart(event){
               if(!event._constructed){
                   return
               }
               if(this.food){
                   this.food.count--;

               }
           }
       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cartcontrol
  font-size 0
  .cart-decrease
    display  inline-block
    padding 6px
    &.move-transition
     opacity 1
     transform translate3d(0,0,0)
    .inner
      line-height 24px;
      font-size 24px
      color rgb(0,160,220)

    &.fade-enter, &.fade-leave-active
      opacity 0
      transform translateX(24px,0)
    &.fade-enter-active, &.fade-leave-active
      opacity 1
      transform translateX(0,0)
      transform all 5s linear
   .cart-add
    display inline-block
    line-height 24px
    font-size 24px
    padding 6px
    color rgb(0,160,220)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px;
    color rgb(147,153,159)
</style>
