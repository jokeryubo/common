webpackJsonp([42],{AmEU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),l=a("d4/4"),r=a("cKc3"),n=(a("oFuF"),a("NYxO"),{data:function(){return{topbar:{isShow:!0,title:"案例详情"},id:"",DetailData:{imageList:[""]},ShowType:!1,ShowTextType:!1,userData:"",source:!1}},components:{BaseTopbar:l.a},created:function(){sessionStorage.getItem("PublicityCaseDetailTitle")?(this.topbar.title=sessionStorage.getItem("PublicityCaseDetailTitle"),this.source=!1):this.source=!0,this.id=this.$route.params.id,this.GetDetail()},mounted:function(){console.log(this.$route.params.id)},methods:{HandClick:function(){var t=(new Date).getTime();$Hybrid.appToNative("makeChat",s()({id:this.id,title:this.DetailData.resourceName,userId:this.DetailData.providerUserId,nickName:this.DetailData.nickName,salary:"",describe:this.DetailData.resourceDescribe,tagList:[],senderAvatar:"",senderName:"",timestamp:Number(t),jobCity:"",isinvite:!1}))},GetDetail:function(){var t=this;r.a.get({url:"app/publicity/get/case/info",data:{params:{caseId:this.id}}}).then(function(e){console.log("data",e),t.DetailData=e,t.DetailData?t.ShowType=!0:t.ShowTextType=!0})},TagsType:function(t){return 1==t?"品牌推广":2==t?"流量推广":3==t?"销售推广":4==t?"会员推广":5==t?"新媒体运营":6==t?"微博运营":7==t?"微信运营":8==t?"网站运营":9==t?"混合型运营":void 0}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"PublicityCaseDetail"}},[a("BaseTopbar",{attrs:{topbar:t.topbar}}),t._v(" "),a("div",{},[a("div",{staticClass:"head-title"},[a("p",[t._v(t._s(this.DetailData.title))]),t._v(" "),a("p",[a("span",{staticClass:"title-desc"},[t._v("服务类型")]),a("span",[t._v("  "+t._s(t.TagsType(t.DetailData.serviceType)))])]),t._v(" "),a("p",[a("span",{staticClass:"title-desc"},[t._v("案例费用")]),a("span",{staticClass:"price"},[t._v("  ¥"+t._s(t.DetailData.renovationCosts))])])]),t._v(" "),a("div",{staticClass:"margin"},[t.source?a("div",{staticClass:"detail-title margin-top"},[t._v("\n                成果展示\n            ")]):t._e(),t._v(" "),t.source?a("div",{staticClass:"img-box"},[a("div",t._l(t.DetailData.displayResults,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"value.url"}],key:e,attrs:{alt:""}})}),0)]):t._e(),t._v(" "),a("div",{staticClass:"detail-title"},[t._v("\n                服务详情\n            ")]),t._v(" "),a("div",{staticClass:"img-box"},[a("div",t._l(t.DetailData.serviceDetails,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"value.url"}],key:e,attrs:{alt:""}})}),0)]),t._v(" "),t.source?a("div",{staticClass:"detail-title"},[t._v("\n                设计方案\n            ")]):t._e(),t._v(" "),t.source?a("div",{staticClass:"img-box"},[a("div",t._l(t.DetailData.design,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"value.url"}],key:e,attrs:{alt:""}})}),0)]):t._e()])]),t._v(" "),t.ShowTextType?a("div",{staticClass:"ShowText"},[t._v("\n        暂无案例\n    ")]):t._e()],1)},staticRenderFns:[]};var c=a("VU/8")(n,o,!1,function(t){a("TtJ+")},"data-v-fe9c5b74",null);e.default=c.exports},"TtJ+":function(t,e){}});