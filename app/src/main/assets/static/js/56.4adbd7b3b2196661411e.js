webpackJsonp([56],{QESm:function(a,t){},u0X2:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("NYxO"),e=s("d4/4"),o=s("B1Az"),d=s("Ztop"),v=s("uPNt"),c=(s("cKc3"),s("Au9i"),{data:function(){return{topbar:{isShow:!0,title:"审核申请"},data:[]}},created:function(){},computed:Object(i.b)({}),mounted:function(){this.data=this.$route.params.data},methods:{},components:{BaseTopbar:e.a,Cell:o.a,CellRadio:d.a,Radio:v.a}}),l={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"AuthenticationDetail"}},[s("BaseTopbar",{attrs:{topbar:a.topbar}}),a._v(" "),2==a.data.certificationStatus?s("div",{staticClass:"box1"},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.data.logo,expression:"data.logo"}],staticClass:"icon",attrs:{alt:""}})]),a._v(" "),s("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"为"+a._s(a.data.shopTypeName))]),a._v(" "),s("div",{staticClass:"shop-type"},[a._v("申请已被驳回")]),a._v(" "),s("div",{staticClass:"reason"},[a._v("由于以下原因，暂时无法认证")]),a._v(" "),s("div",{staticClass:"list-box"},[a.data.verifyMsg?s("div",{staticClass:"reason-list"},[a._v("\n                "+a._s(a.data.verifyMsg)+"\n            ")]):a._e()])]):a._e(),a._v(" "),0==a.data.certificationStatus?s("div",{staticClass:"box2"},[s("div",{staticClass:"title"},[a._v("申请已提交")]),a._v(" "),s("div",{staticClass:"sh"},[a._v("请等待工作人员审核")]),a._v(" "),s("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"为"+a._s(a.data.shopTypeName))]),a._v(" "),s("div",{staticClass:"remarks"},[a._v("工作人员将在1-10个工作日内反馈，请稍后查看审核结果")])]):a._e(),a._v(" "),1==a.data.certificationStatus?s("div",{staticClass:"box3"},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.data.logo,expression:"data.logo"}],staticClass:"icon",attrs:{alt:""}})]),a._v(" "),s("div",{staticClass:"shop"},[a._v("认证"+a._s(a.data.shopName)+"为"+a._s(a.data.shopTypeName))]),a._v(" "),s("div",{staticClass:"shop-type"},[a._v("申请已通过")])]):a._e()],1)},staticRenderFns:[]};var r=s("VU/8")(c,l,!1,function(a){s("QESm")},"data-v-b4e76938",null);t.default=r.exports}});