/**
 * Created by hikalu on 17/6/20.
 */
/*eslint-disable*/
window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }
    fire(event,data=null){
        this.vue.$emit(event,data);
    }
    listen(event,callback){
        this.vue.$on(event,callback)
    }
}

Vue.component('coupon',{
    template:`
        <input placeholder="Enter your code" @blur="onCouponApplied">
    `,
     methods:{
        onCouponApplied(){
            Event.fire('applied')
        }
    }
});

Vue.component('model',{
    template:`
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header"></slot>
                </p>
                <button class="delete"></button>
            </header>
            <section class="modal-card-body">
                <slot>default content here</slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <a class="button is-success">Save</a>
                    <a class="button">Cancel</a>
                </slot>
            </footer>
        </div>
    </div>
    `,
     methods:{
        onCouponApplied(){
            Event.fire('applied')
        }
    }
});


Vue.component('progress-view',{
   data(){
       return{
           completionRate:0
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
    },
    created(){
        Event.listen('applied',()=>alert('Handling it'))
    }
});
