<template>
    <div class="cartcontrol">
        <transition name="fade">
            <div class="cart-decrease" v-show="food.count> 0" @click="decreaseCart">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count> 0">{{food.count}}</div>
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
               this.$emit('cart-add',event.target) //添加这句，提交'cart-add'事情给父组件，第二个是要传递的参数

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
    .inner
      line-height 24px;
      font-size 24px
      color rgb(0,160,220)
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
  .fade-enter-active
      animation: bounce-in .3s linear
    @keyframes bounce-in
        0%
          transform: translate3d(20px,0,0)
          opacity 0
        100%
          transform: translate3d(0,0,0)
          opacity 1
  .fade-leave-active
     animation: bounce-in .3s reverse;


</style>
