webpackJsonp([100],{I3oL:function(a,s){},M8hm:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("NYxO"),e=t("d4/4"),o=t("B1Az"),c=t("Ztop"),r=t("uPNt"),v=(t("cKc3"),t("Au9i"),{data:function(){return{topbar:{isShow:!0,title:"审核申请"},data:[]}},created:function(){},computed:Object(i.b)({}),mounted:function(){console.log(9999999999999,this.$route.params.data),this.data=this.$route.params.data},methods:{},components:{BaseTopbar:e.a,Cell:o.a,CellRadio:c.a,Radio:r.a}}),d={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{attrs:{id:"AuthenticationDetail"}},[t("BaseTopbar",{attrs:{topbar:a.topbar}}),a._v(" "),2==a.data.certificationStatus?t("div",{staticClass:"box1"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.data.logo+"?x-oss-process=image/resize,w_150",expression:"data.logo+'?x-oss-process=image/resize,w_150'"}],staticClass:"icon",attrs:{alt:""}})]),a._v(" "),t("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"店铺为餐饮店铺")]),a._v(" "),t("div",{staticClass:"shop-type"},[a._v("申请已被驳回")]),a._v(" "),t("div",{staticClass:"reason"},[a._v("由于以下原因，暂时无法认证")]),a._v(" "),t("div",{staticClass:"list-box"},[a.data.verifyMsg?t("div",{staticClass:"reason-list"},[a._v("\n                "+a._s(a.data.verifyMsg)+"\n            ")]):a._e()])]):a._e(),a._v(" "),0==a.data.certificationStatus?t("div",{staticClass:"box2"},[t("div",{staticClass:"title"},[a._v("申请已提交")]),a._v(" "),t("div",{staticClass:"sh"},[a._v("请等待工作人员审核")]),a._v(" "),t("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"店铺为餐饮店铺")]),a._v(" "),t("div",{staticClass:"remarks"},[a._v("工作人员将在1-10个工作日内反馈，请稍后查看审核结果")])]):a._e(),a._v(" "),1==a.data.certificationStatus?t("div",{staticClass:"box3"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.data.logo+"?x-oss-process=image/resize,w_150",expression:"data.logo+'?x-oss-process=image/resize,w_150'"}],staticClass:"icon",attrs:{alt:""}})]),a._v(" "),t("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"店铺为店铺为餐饮店铺")]),a._v(" "),t("div",{staticClass:"shop-type"},[a._v("申请已通过")])]):a._e()],1)},staticRenderFns:[]};var l=t("VU/8")(v,d,!1,function(a){t("I3oL")},"data-v-26e73129",null);s.default=l.exports}});