webpackJsonp([105],{"5FYx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("d4/4"),i=a("cKc3"),n={data:function(){return{topbar:{isShow:!0,title:"详情"},detialData:{},imgdataArr:[],sheetVisible:!1,actions:[{name:"确认删除",method:this.sureDelete}]}},components:{BaseTopbar:s.a},created:function(){var t=this;i.a.get({url:"app/case/get",data:{params:{caseId:this.$route.params.caseId||window.sessionStorage.getItem("currentCaseId")}}}).then(function(e){t.detialData=e,t.imgdataArr=e.imageList})},computed:{},mounted:function(){},updated:function(){},watch:{},methods:{goEdit:function(){this.$router.push({name:"UploadCase",query:this.detialData})},deleteCase:function(){this.sheetVisible=!0},sureDelete:function(){var t=this;i.a.delete({url:"app/case/delete",data:{params:{caseId:this.$route.params.caseId||window.sessionStorage.getItem("currentCaseId")}}}).then(function(e){$Hybrid.routerList.pop(),t.$router.back()})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"CaseDetial"}},[a("BaseTopbar",{attrs:{topbar:t.topbar}},[2==t.detialData.reviewStatus?a("button",{staticClass:"edit",on:{click:function(e){return t.goEdit()}}},[t._v("编辑")]):t._e()]),t._v(" "),a("div",{staticClass:"content"},[t.detialData.imageList?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.detialData.imageList[0],expression:"detialData.imageList[0]"}],staticClass:"mainImg",attrs:{alt:""}}):t._e(),t._v(" "),a("p",{staticClass:"title"},[t._v(t._s(t.detialData.resourceName))]),t._v(" "),a("p",{staticClass:"tag"},[a("span",{staticClass:"type"},[t._v("\n                "+t._s(t.detialData.typeName)+"\n            ")]),t._v(" "),a("span",[t._v("\n                发布时间\n                "),a("span",{staticClass:"time"},[t._v(t._s(t.detialData.updateTime))])])]),t._v(" "),a("div",{staticClass:"detial"},[a("p",[t._v("详情介绍")]),t._v(" "),a("div",{staticClass:"detialContent"},[t._v(t._s(t.detialData.resourceDescribe))]),t._v(" "),t._l(t.imgdataArr,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],key:e,staticClass:"mainImg",attrs:{alt:""}})})],2)]),t._v(" "),a("mt-actionsheet",{attrs:{actions:t.actions},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}}),t._v(" "),a("div",{staticClass:"deleteBtn",on:{click:function(e){return t.deleteCase()}}},[t._v("删除资源信息")])],1)},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("7hwJ")},"data-v-2126e66a",null);e.default=c.exports},"7hwJ":function(t,e){}});