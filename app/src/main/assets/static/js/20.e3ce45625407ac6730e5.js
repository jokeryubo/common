webpackJsonp([20],{cYUX:function(t,a){},iX0B:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("mvHQ"),i=e.n(s),r=(e("NYxO"),e("d4/4")),l=e("tif6"),d=e("9MSF"),o=e("rqoL"),c=e("KgB8"),v=e("Wl27"),n=e("lTvI"),m=e("Au9i"),D=e("cKc3"),_={name:"DetailKitchen",data:function(){return{topbar:{isShow:!0,title:"订单详情"},selected:"1",OrderData:"",shopName:"",sheetVisible:!1,SheetVisibleText:"",RemoveOrderType:"",payments:this.paymentCallBack,agreementType:!1,ShowHtmlType:"",DetailData:{},payType:"",payBack:"",payIsClick:!0,ClickRemoveOrder:!0,ClickCancelOrder:!0}},created:function(){},mounted:function(){this.OrderData=this.$route.params.data||JSON.parse(window.sessionStorage.getItem("DetailKitchen")),console.log("订单信息",this.OrderData),"12"==this.OrderData.status&&(this.topbar.title="退款详情"),window.sessionStorage.setItem("DetailKitchen",i()(this.OrderData)),this.ShowHtml()},components:{BaseTopbar:r.a,Toast:m.Toast,OrderInfoItem:l.a,AddressInfo:d.a,Payment:v.a,OrderImgItem:o.a,Countdown:c.a,PopupSure:n.a},methods:{RemoveOrder:function(){var t=this;if("删除订单"==this.RemoveOrderType){if(0==this.ClickRemoveOrder)return!1;this.ClickRemoveOrder=!1,D.a.delete({url:"order/kitchen/remove",data:{params:{orderId:this.DetailData.id}}}).then(function(a){var e=t;setTimeout(function(){e.ClickRemoveOrder=!0,$Hybrid.routerList.pop(),e.$router.go(-1)},500),console.log("删除结果",a)})}if("取消订单"==this.RemoveOrderType){if(0==this.ClickCancelOrder)return!1;this.ClickCancelOrder=!1,D.a.get({url:"order/kitchen/cancel",data:{params:{orderId:this.DetailData.id}}}).then(function(a){var e=t;setTimeout(function(){e.ClickCancelOrder=!0,$Hybrid.routerList.pop(),e.$router.go(-1)},500),console.log("取消结果",a)})}},HandleClick:function(t){var a=this;if(this.RemoveOrderType=t,console.log(t),"申请退款"==t&&D.a.post({url:"order/kitchen/refundOrder",data:{params:{orderId:this.DetailData.id}}}).then(function(t){var e=a;setTimeout(function(){$Hybrid.routerList.pop(),e.$router.go(-1)},500),console.log("申请退款结果",t)}),"删除订单"==t&&(this.SheetVisibleText="您确定删除订单吗",this.sheetVisible=!0),"待付款"==t&&3==this.payType){if(0==this.payIsClick)return!1;this.payIsClick=!1,D.a.post({url:"order/payment/start/payment",data:{params:{payType:this.payType-1,orderNumber:this.DetailData.orderNumber,amount:this.DetailData.payPrice,bankCardNo:this.payBack.cardNo}}}).then(function(t){a.payIsClick=!0,a.$router.push({name:"BackPay",params:{BackPayData:t,Url:"OrderKitchen"}})})}"取消订单"==t&&(this.sheetVisible=!0,this.SheetVisibleText="您确定取消订单吗")},GoChat:function(t){console.log("adawaadaw",t.providerUserId,t.nickName),$Hybrid.appToNative("makeChat",i()({id:"",title:"",userId:t.providerUserId,nickName:t.nickName,salary:"",describe:"",tagList:[],senderAvatar:"",senderName:"",timestamp:0,jobCity:"",isinvite:!1}))},typeText:function(t){switch(t){case 1:return"待付款";case 3:return"已取消";case 2:return"进行中";case 5:return"已完成";case 11:return"退款中";case 12:return"已退款"}},ShowHtml:function(){this.ShowHtmlType=this.OrderData.status,this.GetData(this.OrderData.id,this.OrderData.auditId)},GetData:function(t,a){var e=this;D.a.get({url:"order/kitchen/get/order",data:{params:{orderId:t}}}).then(function(t){e.DetailData=t,console.log("订单详情",t)})},agreement:function(){this.agreementType=!this.agreementType},paymentCallBack:function(t,a){this.payType=t,this.payBack=3==t?a:"",console.log("支付方式: ",t,a)}}},u={render:function(){var t=this,a=this,s=a.$createElement,i=a._self._c||s;return a.DetailData.id?i("div",{attrs:{id:"DetailKitchen"}},[i("BaseTopbar",{attrs:{topbar:a.topbar}}),a._v(" "),"1"==a.ShowHtmlType?i("div",{staticClass:"dfk"},[i("div",{staticClass:"bg-head"},[i("p",[a._v("您已下单，请及时完成支付")]),a._v(" "),i("div",{staticClass:"dfk-AddressInfo"},[i("AddressInfo",{attrs:{name:a.DetailData.operatorName,tel:a.DetailData.tel,address:a.DetailData.address}})],1)]),a._v(" "),a.DetailData?i("div",{staticClass:"margin margin-top"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title"},[a._m(0),a._v(" "),i("div",{staticClass:"message"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1),a._v(" "),i("div",{staticClass:"item-footer"},[i("div",{staticClass:"footer-list btn"},[i("div",{staticClass:"btn-content"},[i("span",[a._v("支付金额  ")]),a._v(" "),i("span",{staticClass:"money"},[a._v("￥"+a._s(a.DetailData.payPrice))])])])])]):a._e(),a._v(" "),i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])]),a._v(" "),i("div",{staticClass:"footer-btn"},[i("div",{staticClass:"words"},[i("span",{staticStyle:{color:"#000"}},[a._v("总计")]),a._v("  ￥"+a._s(a.DetailData.payPrice))]),a._v(" "),i("div",{staticClass:"btn-remove",on:{click:function(t){return a.HandleClick("取消订单")}}},[a._v("取消订单")])])]):a._e(),a._v(" "),"3"==a.ShowHtmlType?i("div",{staticClass:"qx"},[i("AddressInfo",{attrs:{name:a.DetailData.operatorName,tel:a.DetailData.tel,address:a.DetailData.address}}),a._v(" "),i("div",{staticClass:"margin margin-top-20"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title"},[a._m(1),a._v(" "),i("div",{staticClass:"message gray"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1),a._v(" "),i("div",{staticClass:"item-footer"},[i("div",{staticClass:"footer-list btn"},[i("div",{staticClass:"btn-content"},[i("span",[a._v("实付  ")]),a._v(" "),i("span",{staticClass:"money"},[a._v("￥"+a._s(a.DetailData.payPrice))])])])])]),a._v(" "),i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])]),a._v(" "),i("div",{staticClass:"footer-btn"},[i("div",{staticClass:"words"},[i("span",{staticStyle:{color:"#000"}},[a._v("总计")]),a._v("  ￥"+a._s(a.DetailData.payPrice))]),a._v(" "),i("div",{staticClass:"btn",on:{click:function(t){return a.HandleClick("删除订单")}}},[a._v("删除订单")])])],1):a._e(),a._v(" "),"2"==a.ShowHtmlType?i("div",{staticClass:"jxz"},[i("AddressInfo",{attrs:{name:a.DetailData.operatorName,tel:a.DetailData.tel,address:a.DetailData.address}}),a._v(" "),i("div",{staticClass:"margin margin-top-20"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title"},[a._m(2),a._v(" "),i("div",{staticClass:"message"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1),a._v(" "),i("div",{staticClass:"item-footer"},[i("div",{staticClass:"footer-list btn"},[i("div",{staticClass:"btn-content"},[i("span",[a._v("实付  ")]),a._v(" "),i("span",{staticClass:"money"},[a._v("￥"+a._s(a.DetailData.payPrice))])])])])]),a._v(" "),i("div",{staticClass:"margin",staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])]),a._v(" "),a.DetailData.providerId?i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"head"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.DetailData.logo,expression:"DetailData.logo"}],staticClass:"head-img",attrs:{alt:""}}),a._v(" "),i("div",{staticClass:"head-connet"},[i("p",[a._v("快小二")]),a._v(" "),i("p",[a._v(a._s(a.DetailData.providerName))])]),a._v(" "),i("div",{staticClass:"icon-img"},[i("img",{attrs:{src:e("LfT8"),alt:""},on:{click:function(t){return a.GoChat(a.DetailData)}}})])])])]):a._e(),a._v(" "),i("div",{staticClass:"footer-btn"},[i("div",{staticClass:"words"},[i("span",{staticStyle:{color:"#000"}},[a._v("总计")]),a._v("  ￥"+a._s(a.DetailData.payPrice))]),a._v(" "),i("div",{staticClass:"btn",on:{click:function(t){return a.HandleClick("申请退款")}}},[a._v("申请退款")])])],1):a._e(),a._v(" "),"5"==a.ShowHtmlType?i("div",{staticClass:"wc"},[i("AddressInfo",{attrs:{name:a.DetailData.operatorName,tel:a.DetailData.tel,address:a.DetailData.address}}),a._v(" "),i("div",{staticClass:"margin margin-top-20"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title"},[a._m(3),a._v(" "),i("div",{staticClass:"message gray"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1),a._v(" "),i("div",{staticClass:"item-footer"},[i("div",{staticClass:"footer-list btn"},[i("div",{staticClass:"btn-content"},[i("span",[a._v("服务总价  ")]),a._v(" "),i("span",{staticClass:"money"},[a._v("￥"+a._s(a.DetailData.payPrice))])])])])]),a._v(" "),i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])]),a._v(" "),a.DetailData.providerId?i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"head"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.DetailData.logo,expression:"DetailData.logo"}],staticClass:"head-img",attrs:{alt:""}}),a._v(" "),i("div",{staticClass:"head-connet"},[i("p",[a._v("快小二")]),a._v(" "),i("p",[a._v(a._s(a.DetailData.providerName))])]),a._v(" "),i("div",{staticClass:"icon-img"},[i("img",{attrs:{src:e("LfT8"),alt:""},on:{click:function(t){return a.GoChat(a.DetailData)}}})])])])]):a._e(),a._v(" "),i("div",{staticClass:"footer-btn"},[i("div",{staticClass:"words"},[i("span",{staticStyle:{color:"#000"}},[a._v("总计")]),a._v("  ￥"+a._s(a.DetailData.payPrice))]),a._v(" "),i("div",{staticClass:"btn",on:{click:function(t){return a.HandleClick("删除订单")}}},[a._v("删除订单")])])],1):a._e(),a._v(" "),"11"==a.ShowHtmlType?i("div",{staticClass:"tk dfk"},[i("div",{staticClass:"bg-head"},[i("p",[a._v("您已成功发起退款申请，请耐心等待快快处理！")]),a._v(" "),i("p",[a._v("快快将在3个工作日之内将您的退款全额原路退回")]),a._v(" "),i("div",{staticClass:"dfk-AddressInfo"},[i("AddressInfo",{attrs:{name:a.DetailData.operatorName,tel:a.DetailData.tel,address:a.DetailData.address}})],1)]),a._v(" "),i("div",{staticClass:"sb-msg",staticStyle:{"margin-top":"40px"}}),a._v(" "),i("div",{staticClass:"margin "},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title"},[a._m(4),a._v(" "),i("div",{staticClass:"message gray"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1),a._v(" "),i("div",{staticClass:"item-footer"},[i("div",{staticClass:"footer-list btn"},[i("div",{staticClass:"btn-content"},[i("span",[a._v("实付  ")]),a._v(" "),i("span",{staticClass:"money"},[a._v("￥"+a._s(a.DetailData.payPrice))])])])])]),a._v(" "),i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])])]):a._e(),a._v(" "),"12"==a.ShowHtmlType?i("div",{staticClass:"ytk"},[i("div",{staticClass:"ytk-head"},[i("p",[a._v("退款金额   ￥"+a._s(a.DetailData.actualRefundAmount))]),a._v(" "),i("p",[a._v("退款时间   "+a._s(a.DetailData.refundTime))]),a._v(" "),i("p",[a._v("退回账户   原路返回")])]),a._v(" "),i("div",{staticClass:"margin margin-top-20"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item-title item-title-bottom"},[a._m(5),a._v(" "),i("div",{staticClass:"message gray"},[a._v(a._s(a.typeText(a.DetailData.status)))])]),a._v(" "),i("OrderImgItem",{attrs:{imgUrl:a.DetailData.mainImage[0].url,name:a.DetailData.name,valueAddedName:a.DetailData.valueAdded,valueAddedServicesName:a.DetailData.valueAddedServicesName,price:a.DetailData.price,num:a.DetailData.number,border:"bottom"}})],1)]),a._v(" "),i("div",{staticClass:"margin"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-list"},[a._v("订单编号  "+a._s(a.DetailData.orderNumber))]),a._v(" "),i("div",{staticClass:"detail-list"},[a._v("下单时间  "+a._s(a.DetailData.createTime))])])])])]):a._e(),a._v(" "),i("PopupSure",{attrs:{Data:{sheetVisible:a.sheetVisible,message:a.SheetVisibleText,sureText:"确定",surePop:this.RemoveOrder,removePop:function(){t.sheetVisible=!1}}}})],1):a._e()},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logo-img"},[a("img",{staticClass:"logo",attrs:{src:e("ua4X")}}),this._v(" "),a("span",[this._v("世纪天鸿")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logo-img"},[a("img",{staticClass:"logo",attrs:{src:e("ua4X")}}),this._v(" "),a("span",[this._v("世纪天鸿")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logo-img"},[a("img",{staticClass:"logo",attrs:{src:e("ua4X")}}),this._v(" "),a("span",[this._v("世纪天鸿")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logo-img"},[a("img",{staticClass:"logo",attrs:{src:e("ua4X")}}),this._v(" "),a("span",[this._v("世纪天鸿")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logo-img"},[a("img",{staticClass:"logo",attrs:{src:e("ua4X")}}),this._v(" "),a("span",[this._v("世纪天鸿")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",{staticClass:"icon"}),this._v(" 退款信息")])}]};var p=e("VU/8")(_,u,!1,function(t){e("kCrC")},"data-v-4043b2ee",null);a.default=p.exports},kCrC:function(t,a){},rqoL:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"OrderImgItem"}},[e("div",{staticClass:"content-box",class:t.Class(t.border||"")},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],staticClass:"img"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("p",{staticClass:"title"},[t._v(t._s(t.name+(t.valueAddedName?" + "+t.valueAddedName:"")+(t.valueAddedServicesName?" + "+t.valueAddedServicesName:"")))]),t._v(" "),e("p",{staticClass:"price"},[t._v("￥"+t._s(t.price))])]),t._v(" "),e("div",{staticClass:"right"},[t._v("x"+t._s(t.num))])])])])},staticRenderFns:[]};var i=e("VU/8")({props:["imgUrl","name","price","num","border","valueAddedName","valueAddedServicesName"],data:function(){return{}},components:{},mounted:function(){},methods:{Class:function(t){return"top"==t?"border-top":"bottom"==t?"border-bottom":void 0}}},s,!1,function(t){e("cYUX")},"data-v-69285a32",null);a.a=i.exports},ua4X:function(t,a,e){t.exports=e.p+"static/img/shijilogo.9f8e37c.png"}});