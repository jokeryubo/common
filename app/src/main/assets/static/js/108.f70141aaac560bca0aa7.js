webpackJsonp([108],{"JO+H":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Gu7T"),i=e.n(s),o=e("tmUd"),n=e("VaMN"),l=e("cKc3"),h=(e("Au9i"),{name:"Cashier",data:function(){return{topbar:{isShow:!0,title:""},CashierData:[],loadMore:this.loadMoreCallBack,pageNum:1,nocitydatatag:!1,loadingMessage:"",loadingMessage2:"抱歉,当前城市的服务正在开通中，您可以试试其他城市~~",shopName:"",tags:"9",lon:104.069498,lat:30.552376,city:"成都市",isLoading:!1,loading:!1,finished:!1}},components:{BaseTopSearch:o.a,InfiniteScroll:n.a},created:function(){console.log("收银系统定位信息",this.$eventHub._data.$location),this.lon=this.$eventHub._data.$location.lon,this.lat=this.$eventHub._data.$location.lat,this.city=this.$eventHub._data.$location.cityName,this.GetData(this.shopName,this.tags,this.lon,this.lat,this.pageNum)},mounted:function(){},methods:{onSearch:function(a){this.pageNum=1,this.shopName=a,this.loadingMessage="",this.CashierData=[],this.GetData(this.shopName,this.tags,this.lon,this.lat,this.pageNum)},handleChange:function(a){console.log("改变")},loadTop:function(){this.pageNum=1,this.loadingMessage="",this.GetData(this.shopName,this.tags,this.lon,this.lat,this.pageNum,"refresh")},GetData:function(a,t,e,s,o,n){var h=this;l.a.get({url:"app/provider/info/get/nearby",data:{params:{shopName:a,tags:t,lon:e,lat:s,city:this.city,pageNumber:o,pageSize:20}}}).then(function(t){console.log("所有数据",t),h.loading=!1;var e=t.total,s=t.contents;h.CashierData="refresh"!==n?[].concat(i()(h.CashierData),i()(s)):[].concat(i()(s)),h.CashierData.length>=e?h.finished=!0:(h.pageNum+=1,h.finished=!1),h.loadingMessage=0==e?"没有搜索到相关内容":"已经全部加载完毕",a||1!=h.pageNum||0!=e||(h.nocitydatatag=!0)})},handClick:function(a,t){if("GotoDetail"==a)return this.$router.push({name:"AppSservicesList",query:{shopId:t,type:"9"}}),!1},loadMoreCallBack:function(){this.loading=!0,this.GetData(this.shopName,this.tags,this.lon,this.lat,this.pageNum)}}}),c={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"Cashier"}},[s("base-top-search",{attrs:{option:[],showTag:!1,placeholder:"搜索收银系统公司名称"},on:{search:a.onSearch,change:a.handleChange}}),a._v(" "),s("div",{staticClass:"container"},[s("infinite-scroll",{attrs:{isDelayed:!0,loading:a.loading,finished:a.finished,data:a.CashierData,text:a.nocitydatatag?a.loadingMessage2:a.loadingMessage},on:{refresh:a.loadTop,loadMore:a.loadMoreCallBack}},a._l(a.CashierData,function(t,i){return s("div",{key:i,staticClass:"list",on:{click:function(e){return a.handClick("GotoDetail",t.shopId)}}},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.logo+"?x-oss-process=image/resize,w_150",expression:"value.logo+'?x-oss-process=image/resize,w_150'"}]})]),a._v(" "),s("div",{staticClass:"flex"},[s("div",{staticClass:"list-content"},[s("div",{staticClass:"text-box"},[s("span",{staticClass:"shopName"},[a._v(a._s(t.shopName))]),a._v(" "),t.vipStatus?s("img",{attrs:{src:e("RSf1")}}):a._e()]),a._v(" "),s("div",{staticClass:"distance"},[a._v(a._s(t.distance/1e3+"km"))])])])])}),0)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(h,c,!1,function(a){e("OeUp")},"data-v-1dc34cd7",null);t.default=r.exports},OeUp:function(a,t){}});