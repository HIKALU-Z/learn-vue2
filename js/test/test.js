var app = new Vue({
  el: "#app",
  data: {
    name: "hikalu",
    date: new Date(),
    codeplace: '<div class="codeplace">this a code place </div>'
  },
  created: function() {
    console.log(this.name);
  },
  mounted: function() {
    console.log(this.$el);
    var _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date();
    }, 1000);
    this.init("when mounted");
  },
  methods: {
    init: function(text) {
      console.log(text);
    }
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
});

app.init("外部调用");
