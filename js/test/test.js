/*eslint-disable*/

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '#content-component' }
const Bar = { template: '#content-component' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})
var app = new Vue({
  el: '#app',
  router,
  data: {
    name: 'hikalu',
    date: new Date(),
    codeplace: '<div class="codeplace">this a code place </div>',
    books:[
      {
        name:'《西南联大回忆录》',
        author:'杨振宁'
      },
      {
        name:'《西南联大回忆录》',
        author:'杨振宁'
      },
      {
        name:'《西南联大回忆录》',
        author:'杨振宁'
      }
    ]
  },
  created: function() {
    console.log(this.name)
  },
  mounted: function() {
    console.log(this.$el)
    var _this = this
    this.timer = setInterval(function() {
      _this.date = new Date()
    }, 1000)
    this.init('when mounted')
  },
  methods: {
    init: function(text) {
      console.log(text)
    }
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
})




app.init('外部调用')
app.books = app.books.filter(function(item){
    return item.author.match('杨振宁');
})

