webpackJsonp([78],{BdbS:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Gu7T"),s=i.n(e),o=i("tmUd"),n=i("VaMN"),l=i("cKc3"),c=i("oFuF"),u={name:"PublicityHome",components:{BaseTopSearch:o.a,InfiniteScroll:n.a},data:function(){return{keyword:"",TagsData:[{text:"筛选",value:""},{text:"品牌推广",value:1},{text:"流量推广",value:2},{text:"销售推广",value:3},{text:"会员推广",value:4},{text:"新媒体运营",value:5},{text:"微博运营",value:6},{text:"微信运营",value:7},{text:"网站运营",value:8},{text:"混合型运营",value:9}],nocitydatatag:!1,pageNum:1,tags:"",lon:104.069498,lat:30.552376,city:"成都市",PublicityData:[],loading:!1,isLoading:!1,finished:!1,loadMoreMessage:"已经全部加载完毕",loadMoreMessage2:"抱歉,当前城市的服务正在开通中，您可以试试其他城市~~"}},created:function(){console.log("宣传推广定位信息",this.$eventHub._data.$location),this.lon=this.$eventHub._data.$location.lon,this.lat=this.$eventHub._data.$location.lat,this.city=this.$eventHub._data.$location.cityName,this.GetData(this.keyword,this.tags,this.lon,this.lat,this.pageNum)},mounted:function(){},methods:{onRefresh:function(){this.pageNum=1,this.finished=!0,this.GetData(this.keyword,this.tags,this.lon,this.lat,this.pageNum,"refresh")},onLoadMore:function(){this.loading=!0,this.GetData(this.keyword,this.tags,this.lon,this.lat,this.pageNum,"pullingUp")},goBack:function(){$Hybrid.appToNative("close")},GetData:function(t,a,i,e,o,n){var c=this;l.a.get({url:"app/publicity/list",data:{params:{name:t,type:a,lon:i,lat:e,city:this.city,pageNum:o,pageSize:20}}}).then(function(i){c.loading=!1;var e=i.total,o=i.list;console.log("this.PublicityData.length",c.PublicityData.length),c.PublicityData.length>0&&"refresh"!==n?c.PublicityData=[].concat(s()(c.PublicityData),s()(o)):(console.log("=====>2"),c.PublicityData=[].concat(s()(o))),console.log("PublicityData===>",c.PublicityData),c.PublicityData.length>=e?c.finished=!0:(c.finished=!1,c.pageNum+=1),c.loadMoreMessage=0==e?"没有更多数据":"已经全部加载完毕",t||1!=c.pageNum||a||0!=e||(c.nocitydatatag=!0)})},handClick:function(t,a){var i=this;if("GotoDetail"==t)return l.a.get({url:"app/publicity/get/case",data:{params:{shopId:a}}}).then(function(t){var a="";1==t.type?(a="PublicityOssList",i.$router.push({name:a,params:{PublicityDetailData:t}})):(a="AppSservicesList",i.$router.push({name:a,query:{shopId:t.shopInfoDO.id,type:"4"}}))}),!1},baseDropChange:function(t){this.tags=t,this.pageNum=1,this.PublicityData=[],this.GetData(this.keyword,this.tags,this.lon,this.lat,this.pageNum)},onSearch:function(t){this.keyword=t,this.pageNum=1,this.PublicityData=[],this.GetData(this.keyword,this.tags,this.lon,this.lat,this.pageNum)},ellipsisText:function(t,a){return c.a.ellipsisText(t,a)}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"PublicityHome"}},[e("base-top-search",{attrs:{option:t.TagsData},on:{search:t.onSearch,change:t.baseDropChange}}),t._v(" "),e("div",{staticClass:"contianer"},[e("infinite-scroll",{attrs:{isDelayed:!0,loading:t.loading,finished:t.finished,data:t.PublicityData,text:t.nocitydatatag?t.loadMoreMessage2:t.loadMoreMessage},on:{refresh:t.onRefresh,loadMore:t.onLoadMore}},t._l(t.PublicityData,function(a,s){return e("div",{key:s,staticClass:"list",on:{click:function(i){return t.handClick("GotoDetail",a.shopId)}}},[e("div",{staticClass:"flex"},[e("div",{staticClass:"list-content"},[e("div",{staticClass:"text-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.logo+"?x-oss-process=image/resize,w_150",expression:"value.logo+'?x-oss-process=image/resize,w_150'"}],staticClass:"img-head"}),t._v(" "),e("span",{staticClass:"shop-name"},[t._v(t._s(t.ellipsisText(a.shopName,60)))]),t._v(" "),a.vip?e("img",{attrs:{src:i("RSf1")}}):t._e()]),t._v(" "),e("div",{staticClass:"distance"},[t._v(t._s(a.distance/1e3+"km"))])]),t._v(" "),e("div",{staticClass:"margin-top"},t._l(a.tags,function(a,i){return e("span",{key:i,staticClass:"desc"},[t._v(t._s(a))])}),0)])])}),0)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(u,h,!1,function(t){i("IBsK")},"data-v-54b844a2",null);a.default=r.exports},IBsK:function(t,a){}});