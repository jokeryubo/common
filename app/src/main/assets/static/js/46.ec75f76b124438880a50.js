webpackJsonp([46],{gLmS:function(t,a){},voPV:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),s=e.n(i),n=e("d4/4"),o=e("cKc3"),r=(e("oFuF"),e("NYxO"),{data:function(){return{topbar:{isShow:!0,title:"详情"},shopId:"",DetailData:{imageList:[""]},ShowTextType:!1,ShowHtml:!1,userData:""}},components:{BaseTopbar:n.a},created:function(){this.$eventHub.$off("toLogin").$on("toLogin",function(t){var a=t.token;$Hybrid.$token=a}),this.shopId=this.$route.params.shopId,this.GetDetail()},destroyed:function(){this.$eventHub.$off("toLogin")},methods:{HandClick:function(){if(!$Hybrid.$token)return $Hybrid.appToNative("toLogin"),!1;(new Date).getTime();this.addChatNum(),$Hybrid.appToNative("makeChat",s()({id:"",title:"",userId:this.DetailData.providerUserId,nickName:this.DetailData.nickName,salary:"",describe:"",tagList:[],senderAvatar:"",senderName:"",timestamp:0,jobCity:"",isinvite:!1}))},addChatNum:function(){o.a.get({url:"app/attractinvestment/communicate",data:{params:{communicateType:"5",toUser:this.DetailData.providerUserId,number:this.shopId,shopId:this.shopId}}})},GetDetail:function(){var t=this;o.a.get({url:"app/case/get",data:{params:{caseId:this.shopId}}}).then(function(a){t.DetailData=a,t.DetailData?(t.ShowHtml=!0,t.ShowTextType=!1):(t.ShowHtml=!1,t.ShowTextType=!0)})}}}),d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"AdvertAppDetail"}},[e("BaseTopbar",{attrs:{topbar:t.topbar}}),t._v(" "),t.ShowHtml?e("div",{staticStyle:{background:"#fff"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.DetailData.imageList[0],expression:"DetailData.imageList[0]"}],staticClass:"head-img",attrs:{alt:""}}),t._v(" "),e("div",{staticClass:"margin"},[e("div",{staticClass:"title"},[t._v(t._s(t.DetailData.resourceName))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v(t._s(t.DetailData.typeName))]),t._v(" "),e("span",[t._v("发布时间  "+t._s(t.DetailData.createTime))])]),t._v(" "),e("div",{staticClass:"detail-title"},[t._v("\n                详情介绍\n            ")]),t._v(" "),e("div",{staticClass:"detail-text"},[t._v("\n              "+t._s(t.DetailData.resourceDescribe)+"\n            ")]),t._v(" "),e("div",{staticClass:"img-box"},[e("div",t._l(t.DetailData.imageList,function(t,a){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"value"}],key:a,attrs:{alt:""}})}),0)])]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(a){return t.HandClick()}}},[t._v("\n            立即沟通\n        ")])]):t._e(),t._v(" "),t.ShowTextType?e("div",{staticClass:"ShowText"},[t._v("\n        暂无案例\n    ")]):t._e()],1)},staticRenderFns:[]};var l=e("VU/8")(r,d,!1,function(t){e("gLmS")},"data-v-f3299b42",null);a.default=l.exports}});