<template>
    <div class="shopcart">
        <div class="content">
            <!--左边开始-->
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight':totalCount>0}">
                        <span class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></span>
                    </div>
                    <div class="num"v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}</div>
                <div class="desc">另需配送费元{{seller.deliveryPrice}}</div>
            </div>
            <!--右边开始-->
            <div class="content-right">
                <div class="pay">
                    ￥{{seller.minPrice}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            seller:{
            },
            selectFoods:{
                type:Array,
                default(){
                 return[
                     // {
                     //     price:1,
                     //     count:10
                     // }
                 ]
                }
            }

        },
        computed:{
            //计算商品价格
            totalPrice(){
                let total =0
                this.selectFoods.forEach((food)=>{
                  total += food.price * food.count
                });
                return total
            },
            //计算商品的数量
            totalCount(){
                let count =0
                this.selectFoods.forEach((food)=>{
                    count += food.count

                });
                return count
            },
           payDesc(){
               if(this.totalPrice ===0){
                   return `元起送￥${this.seller.minPrice}`
               }else if(this.totalPrice<this.seller.minPrice){
                   let diff = this.minPrice - this.totalPrice
                   return  `还差￥${dff}`
               }
           }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 48px
    background: #000
    .content
      display flex
      background #141d27
      .content-left
       flex 1
       .logo-wrapper
         display inline-block
         position relative
         top -10px
         margin  0 12px
         padding 6px
         width 50px
         height 50px
         vertical-align top
         border-radius 50%
         background #141d27
         .logo
          width 100%
          height 100%
          border-radius 50%
          background #2b343c
          text-align center
          &.highlight
            background rgb(0,160,220)
          .icon-shopping_cart
            font-size 24px
            line-height 44px
            color #80858a
            &.highlight
              color:#fff
         .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size 9px
          font-weight 700
          color #fff
          background rgb(240,20,20)
          box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
       .price
         display inline-block
         vertical-align top
         margin-top 12px
         line-height 24px
         padding-right 12px
         box-sizing border-box
         border-right 1px solid rgba(255,255,255,0.1)
         font-size 16px
         color rgba(255,255,255,0.4)
         &.highlight
          color #fff
       .desc
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          line-height 24px
          color rgba(255,255,255,0.4)
      .content-right
        flex: 0 0 105px
        width 105px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 16px
          color rgba(255,255,255,0.4)
          font-weight 700
          background: #2b333b



</style>