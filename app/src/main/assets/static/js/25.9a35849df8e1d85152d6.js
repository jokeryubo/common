webpackJsonp([25],{"9+oC":function(t,a){},X49I:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("d4/4"),n=i("cKc3"),s={data:function(){return{topbar:{isShow:!0,title:"快讯详情"},detailData:{}}},components:{BaseTopbar:e.a},created:function(){var t=this;this.$eventHub.$off("informationList").$on("informationList",function(a){t.getData(a.id)}),this.$eventHub.$off("newsDetail").$on("newsDetail",function(a){t.getData(a.id)}),document.documentElement.scrollTop=0,document.body.scrollTop=0},mounted:function(){},methods:{getData:function(t){var a=this;n.a.get({url:"app/information/detail",data:{params:{id:t}}}).then(function(t){a.detailData=t})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"informationDetail"}},[e("BaseTopbar",{attrs:{topbar:t.topbar}}),t._v(" "),e("div",{staticClass:"con"},[e("div",{staticClass:"content ql-editor"},[e("div",{staticClass:"titleBox"},[e("p",{staticClass:"title"},[t._v(t._s(t.detailData.title))]),t._v(" "),e("div",{staticClass:"desc"},[e("div",[e("span",{staticClass:"name"},[t._v(t._s(t.detailData.source))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.detailData.createTime))])]),t._v(" "),e("div",[e("img",{staticClass:"icon",attrs:{src:i("c/9U")}}),t._v(" "),e("span",{staticClass:"viewnum"},[t._v(t._s(t.detailData.viewCount))])])])]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.detailData.content)}})])])],1)},staticRenderFns:[]};var d=i("VU/8")(s,o,!1,function(t){i("j7Mp"),i("9+oC")},"data-v-22b33798",null);a.default=d.exports},"c/9U":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAE0UlEQVRYR81YXWgcVRT+zuymmd0gVhStClaCKII/RdC20PrzorUV/HmIiKathpYU7LYPZecOSWXAhLmzKaSJQtpotdqKNg/+gCQUH8RWaIuCxhZEH6J98KdS0YJsZtOdOXLDbrmdzO5M0gjet+V859xvz73nnO8OYYHLcRzDNM01RLSemVcCuAPADbVw5wD8QESniGiiXC4fdxwnXMhWNF8nx3HyuVxuaxiGO4loeRp/Zj5rGMbe6enpUcdxyml86pjUBJmZpJSbiEhqmZrPXgp7jpmFEOIdIuI0zqkISilvAXAIwINpgqbAHMtmsxt37dp1NgmbSFBK+SSAgwCWxgT7HsBHAL6sVqtn8vn8eYUpl8vXZbPZuwCsAfA0gDtjfP8GsFkI8Ukzkk0Jep7Xw8yvAojijhqG4RaLxS+SMqDspVLpoTAMbQCPRfBMRLsty+pvFCeW4NjYWGZqauo1ANsijj8SUbdlWZ+nIRbFeJ73CDPvA3B7xDbS3t6+vaOjI4j6zCGoisHzvDcAdGlgdaFf932/6DiOvxBydR/HcUzTNEsAXo6czAHLsrZEi2cOQSnlXgA7NBKqLbwohBiLI+Y4zpJcLtfNzM8BUPdOrTNE9P709PQ+x3Fm4vyklB0A3gaQ1+xDQoidOv4yglJKdd96NcBfqhFblnUybpO+vr6bs9nspwBWNMjqt9Vq9Yne3t5f4uye561i5nEA12j2PiHE7vrvSwQ9z3uemQ9rwN8BrBNCTDbKnGmap5qQq7tN5vP5lYVCoRIXZ2Bg4J4gCI4CWKbZO4UQs1xmCbquez8RHQNg1kAXAKwVQpxudN+klNsBDKe8jwUhhCq62CWlvBvAcQBX1wA+Ea21LOtrGhwcXFqpVL4BcGvNOENE65IqVUp5AsAqbceJIAhmCyuTyRwA8LhmOymEWN3sz7iu+zARqUwuqeF+am1tvU9V7AfM/GzdmZm7bNt+KykzUkp1ZPVgCILgpp6ent+UX39//42ZTOZXLUZFCFE/nYahXdfdSkT7L90/oiNqvh4BoCqqvrYKIVSbabqaESyVSsvCMJwlW1v/CCGuShFzC4BRLVnvxR6xYRiPJk2J6BET0TgRdc3MzGRaWlpGmXn9fI5YSqnm/Gf6Efu+v0IvEnVJW2tBE4vE87wCMw8lZUXZiWiHZVkNCyqmSCrMvNa27a/0NtPJzO9qGzZtM8PDw63lclm1mXubkWTm79ra2h6YZ5vZJISY5XJZo3Zdt4+IerQNr7RRT1ar1Q3zadTM3G/b9qVhMWfUua47REQFjaQaddvq/yiaLTXqTNNUouIFTVYpGXbY9/2RJqNuI4ARfdQx87Bt2/qYnSOjUBMLbwJ4KUJmv+/7OxdDLORyuUFm7o7ETycWlNN/LLdU1tQDS1/p5Zbu1USwThiG4SW1onosJViZuRhpPcqsZNwrQoi+RoWWKPk9z3uKmZUsipX8zPyhkvxBEJyuVqt/qo2y2ey1mUxGzVf1LH2mgeS/QESbLcv6uFkXSCSonPfs2bP84sWLh9QAT9P3kjDMfLylpaVzUR5N2tihUqm0mZnVs/P6JBIN7H8QkSgWiwcX9dmpb/a/fbjH9L/ZTx8ANjDzaiK6rfagrxDR+TAMfyaiE4ZhjF/Jp49/AYcmMAIQd13SAAAAAElFTkSuQmCC"},j7Mp:function(t,a){}});