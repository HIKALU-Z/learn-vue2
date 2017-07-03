/**
 * Created by hikalu on 17/6/20.
 */
Vue.component('coupon',{
    template:`
        <input placeholder="Enter your code" @blur="onCouponApplied">
    `,
     methods:{
        onCouponApplied(){
            this.$emit('applied')
        }
    }
});

new Vue({
    el: '#root',
    data:{
        couponApplied:false
    },
    methods:{
        onCouponApplied(){
            this.couponApplied = true
        }
    }
});
